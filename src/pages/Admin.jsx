import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { MaskedLines, Eyebrow, inputCls } from "@/components/Motion";
import { useSEO } from "@/hooks/useSEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const STATUSES = ["new", "contacted", "booked", "archived"];

const SKIP = new Set(["id", "type", "status", "created_at"]);

export default function Admin() {
  useSEO("Admin — Submissions | Vikash Singh Films", "Internal submissions view.");
  const [key, setKey] = useState(() => localStorage.getItem("vsf_admin_key") || "");
  const [subs, setSubs] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const load = async (k = key, type = filter) => {
    setLoading(true);
    try {
      const params = type !== "all" ? { type } : {};
      const { data } = await axios.get(`${API}/admin/submissions`, {
        headers: { "x-admin-key": k },
        params,
      });
      setSubs(data.submissions);
      localStorage.setItem("vsf_admin_key", k);
    } catch (err) {
      setSubs(null);
      toast.error("Invalid admin key");
    } finally {
      setLoading(false);
    }
  };

  const setStatus = async (id, status) => {
    try {
      await axios.patch(`${API}/admin/submissions/${id}`, { status }, { headers: { "x-admin-key": key } });
      setSubs((s) => s.map((x) => (x.id === id ? { ...x, status } : x)));
      toast.success("Status updated");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <motion.main
      data-testid="page-admin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-36 pb-24 px-6 sm:px-10 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <Eyebrow>Internal</Eyebrow>
        <MaskedLines
          className="mt-4"
          lines={["Submissions"]}
          lineClassName="font-serif text-5xl sm:text-6xl font-light text-slate-50"
        />

        <div className="flex flex-wrap gap-4 mt-10 items-end">
          <label className="block w-full sm:w-80">
            <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Admin Key</span>
            <input
              data-testid="admin-key-input"
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className={inputCls}
              placeholder="Enter admin key"
            />
          </label>
          <button
            data-testid="admin-load-button"
            onClick={() => load()}
            className="bg-gold text-ink px-8 py-3.5 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-light transition-colors"
          >
            {loading ? "Loading..." : "Load Submissions"}
          </button>
          {subs && (
            <div className="flex gap-2">
              {["all", "contact", "post-house"].map((t) => (
                <button
                  key={t}
                  data-testid={`admin-filter-${t}`}
                  onClick={() => { setFilter(t); load(key, t); }}
                  className={`px-4 py-3 text-[10px] font-mono uppercase tracking-[0.2em] border transition-colors ${
                    filter === t ? "border-gold text-gold" : "border-white/15 text-slate-500 hover:text-slate-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {subs && (
          <div data-testid="admin-submissions-list" className="mt-12 space-y-4">
            {subs.length === 0 && (
              <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">No submissions yet.</p>
            )}
            {subs.map((s) => (
              <article key={s.id} data-testid={`admin-submission-${s.id}`} className="border border-white/10 bg-[#121215] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 border ${
                      s.type === "post-house" ? "border-gold/60 text-gold" : "border-white/20 text-slate-300"
                    }`}>
                      {s.type === "post-house" ? "The Post House" : "Contact"}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {new Date(s.created_at).toLocaleString()}
                    </span>
                  </div>
                  <select
                    data-testid={`admin-status-${s.id}`}
                    value={s.status}
                    onChange={(e) => setStatus(s.id, e.target.value)}
                    className="bg-[#0e0e10] border border-white/15 text-xs text-slate-300 px-3 py-2 uppercase tracking-widest"
                  >
                    {STATUSES.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-5">
                  {Object.entries(s)
                    .filter(([k, v]) => !SKIP.has(k) && v)
                    .map(([k, v]) => (
                      <div key={k} className="flex gap-3 text-sm">
                        <dt className="text-slate-500 font-mono text-[11px] uppercase tracking-wider shrink-0 w-36 pt-0.5">
                          {k.replace(/_/g, " ")}
                        </dt>
                        <dd className="text-slate-200 break-words">{v}</dd>
                      </div>
                    ))}
                </dl>
              </article>
            ))}
          </div>
        )}
      </div>
    </motion.main>
  );
}
