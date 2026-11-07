import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  ScrollText,
  Database,
  CheckCircle2,
  Server,
  Users,
  Shield,
  Layers,
  FileCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'data'>('overview');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Banner / Status Indicator */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-medium">Dev Server Berjalan Normal (Port 3000)</span>
            <span className="text-emerald-400">|</span>
            <span className="text-emerald-300">Vite 8 + React 19 + Tailwind v4</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-800/80 px-2.5 py-0.5 rounded text-[11px] font-mono">
              Status: Tahap 2 Blueprint Disetujui
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">KUSAFA</h1>
                <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full border border-amber-300">
                  Kuttab Salman Al Farisi
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Sistem Informasi Capaian Santri — 3 Domain Akademik Independen
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ringkasan Sistem
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'blueprint'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Blueprint Database (41 Tabel)
            </button>
            <button
              onClick={() => setActiveTab('data')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'data'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Status Rekonsiliasi Data
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero / System Readiness Card */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-emerald-700/50 backdrop-blur-sm border border-emerald-600/60 px-3 py-1 rounded-full text-xs font-medium text-emerald-200 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Kondisi Dev Server: Normal &amp; Siap
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Sistem Informasi Capaian Santri (KUSAFA)
                </h2>
                <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                  Platform manajemen akademik dan pencatatan capaian santri berbasis tiga domain independen:
                  <strong> Ilmu Al-Qur&apos;an</strong>, <strong>Ilmu Wasilah</strong>, dan <strong>Ilmu Ghayah</strong>.
                  Didesain sesuai Dokumen Spesifikasi Induk KUSAFA v1.0 tanpa otomatisasi pedagogis mutlak.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-emerald-200">
                  <div className="flex items-center gap-1.5 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-700/40">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span>Port 3000 Aktif</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-700/40">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>PostgreSQL Blueprint Ready (41 Tabel)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-700/40">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Multi-Role RLS &amp; Audit Trail</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Domain Learning Architecture */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">3 Domain Pembelajaran Independen</h3>
                  <p className="text-xs text-slate-500">
                    Santri dapat memiliki halaqah, musyrif/mudarris, target capaian, dan progres yang berbeda di tiap domain.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Domain 1: Al-Qur'an */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-200">
                      14 Halaqah (7 PA / 7 PI)
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 mt-4">Ilmu Al-Qur&apos;an</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Fokus pada Tahfidz (hafalan baru) dan Tilawah harian. Target default: 1 baris/hari untuk Tahfidz &amp; 1 hal/hari untuk Tilawah.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>109 Santri Terdata</span>
                    <span className="text-teal-700 font-medium">Musyrif Tunggal</span>
                  </div>
                </div>

                {/* Domain 2: Wasilah */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                      13 Level Kompetensi
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 mt-4">Ilmu Wasilah</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Ilmu alat (Bahasa Arab, Imla&apos;, Kitabah, Nahwu, Shorof). Progres bulanan berbasis penguasaan materi per bab &amp; jilid.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>111 Santri Terdata</span>
                    <span className="text-indigo-700 font-medium">Level 1 s/d 6</span>
                  </div>
                </div>

                {/* Domain 3: Ghayah */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                      11 Kelompok (Co-teaching)
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 mt-4">Ilmu Ghayah</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Tujuan hakiki (Adab, Sirah Nabawiyah, Aqidah, Fiqih Ibadah). Mendukung multi-pengampu (1–3 mudarris per kelompok).
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>107 Santri Terdata</span>
                    <span className="text-amber-700 font-medium">Target per Komponen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics & System Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-slate-500 text-xs font-medium">Total Tabel Skema</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">41</div>
                <div className="text-[11px] text-emerald-600 mt-0.5 font-medium">Bebas Polimorfisme FK</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-slate-500 text-xs font-medium">Kalender Akademik</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">1446-1447 H</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Syawwal s/d Ramadhan</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-slate-500 text-xs font-medium">Struktur Hak Akses</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">4 Role</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Admin, Mudir, Mas&apos;ul, Asatidzah</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-slate-500 text-xs font-medium">Prosedur Backup</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">23:00 WIB</div>
                <div className="text-[11px] text-slate-500 mt-0.5">AES-256-GCM + Checksum</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blueprint' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-800">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Arsitektur Skema Relasional (41 Tabel Operasional)</h3>
                  <p className="text-xs text-slate-500">
                    Memenuhi standar Dokumen Spesifikasi Induk KUSAFA v1.0 tanpa foreign key polimorfik.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-700" />
                    1. Entitas Pengguna &amp; Master Akademik (12 Tabel)
                  </h4>
                  <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="font-mono text-emerald-900">app_users</code>, <code className="font-mono text-emerald-900">user_roles</code></li>
                    <li><code className="font-mono text-emerald-900">asatidzah</code>, <code className="font-mono text-emerald-900">teacher_assignment_history</code></li>
                    <li><code className="font-mono text-emerald-900">academic_configs</code>, <code className="font-mono text-emerald-900">tahun_akademik</code></li>
                    <li><code className="font-mono text-emerald-900">kalender_hijriah</code>, <code className="font-mono text-emerald-900">periode_bulan</code></li>
                    <li><code className="font-mono text-emerald-900">master_lokasi</code></li>
                    <li><code className="font-mono text-emerald-900">santri</code> (NIS permanen + UUID PK + 5 status resmi)</li>
                    <li><code className="font-mono text-emerald-900">profil_akademik_santri</code></li>
                    <li><code className="font-mono text-emerald-900">student_halaqah_history</code> (FK domain eksplisit)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-teal-700" />
                    2. Domain Ilmu Al-Qur&apos;an (5 Tabel)
                  </h4>
                  <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="font-mono text-emerald-900">quran_halaqah</code> (1 musyrif tunggal)</li>
                    <li><code className="font-mono text-emerald-900">quran_penempatan</code> (status aktif, musyawarah)</li>
                    <li><code className="font-mono text-emerald-900">quran_target_santri</code> (Tahfidz default 1 baris/hari)</li>
                    <li><code className="font-mono text-emerald-900">quran_capaian_harian</code> (Ziyadah &amp; Muraja&apos;ah)</li>
                    <li><code className="font-mono text-emerald-900">quran_rekap_bulanan</code> (Rekap resmi per bulan)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <ScrollText className="w-4 h-4 text-indigo-700" />
                    3. Domain Ilmu Wasilah (5 Tabel)
                  </h4>
                  <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="font-mono text-emerald-900">wasilah_level</code> (Tingkat Level 1 s/d 6)</li>
                    <li><code className="font-mono text-emerald-900">wasilah_penempatan</code></li>
                    <li><code className="font-mono text-emerald-900">wasilah_target</code></li>
                    <li><code className="font-mono text-emerald-900">wasilah_progres</code> (Status posisi materi)</li>
                    <li><code className="font-mono text-emerald-900">wasilah_progres_history</code></li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-700" />
                    4. Domain Ilmu Ghayah (6 Tabel)
                  </h4>
                  <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="font-mono text-emerald-900">ghayah_kelompok</code></li>
                    <li><code className="font-mono text-emerald-900">ghayah_pengampu</code> (Dukungan Co-teaching 1–3 pengampu)</li>
                    <li><code className="font-mono text-emerald-900">ghayah_penempatan</code></li>
                    <li><code className="font-mono text-emerald-900">ghayah_target</code> (Tabel target per komponen/santri)</li>
                    <li><code className="font-mono text-emerald-900">ghayah_progres</code></li>
                    <li><code className="font-mono text-emerald-900">ghayah_progres_history</code></li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-rose-700" />
                    5. Kehadiran, Evaluasi &amp; Catatan (4 Tabel)
                  </h4>
                  <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="font-mono text-emerald-900">kehadiran_domain</code> (Formula: HE - S - I - A)</li>
                    <li><code className="font-mono text-emerald-900">evaluasi_kompetensi</code> (Menguasai / Perlu Penguatan / Belum Menguasai)</li>
                    <li><code className="font-mono text-emerald-900">tindak_lanjut_kompetensi</code></li>
                    <li><code className="font-mono text-emerald-900">admin_evaluation_notes</code></li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-700" />
                    6. Jadwal KBM, Dokumen, Audit &amp; Backup (9 Tabel)
                  </h4>
                  <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="font-mono text-emerald-900">jadwal_kbm</code>, <code className="font-mono text-emerald-900">jadwal_kbm_pengampu</code>, <code className="font-mono text-emerald-900">realisasi_kbm</code></li>
                    <li><code className="font-mono text-emerald-900">penugasan_internal</code>, <code className="font-mono text-emerald-900">penugasan_internal_history</code></li>
                    <li><code className="font-mono text-emerald-900">dokumen_laporan</code>, <code className="font-mono text-emerald-900">notifikasi_sistem</code></li>
                    <li><code className="font-mono text-emerald-900">audit_logs</code> (Immutable JSONB payload)</li>
                    <li><code className="font-mono text-emerald-900">backup_metadata</code> (Enkripsi AES-256-GCM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Status Rekonsiliasi Tiga Sumber Data Aktual</h3>
              <p className="text-xs text-slate-500 mt-1">
                Data mentah telah dipetakan dan siap melalui staging schema sebelum migrasi atomic ke tabel operasional.
              </p>

              <div className="mt-6 overflow-hidden border border-slate-200 rounded-lg">
                <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
                  <thead className="bg-slate-50 font-semibold text-slate-700">
                    <tr>
                      <th className="px-4 py-3">Sumber Data</th>
                      <th className="px-4 py-3">Format</th>
                      <th className="px-4 py-3">Jumlah Entitas</th>
                      <th className="px-4 py-3">Kondisi / Temuan Audit</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Ilmu Al-Qur&apos;an</td>
                      <td className="px-4 py-3 font-mono">CSV (113 baris)</td>
                      <td className="px-4 py-3">109 Santri, 14 Halaqah</td>
                      <td className="px-4 py-3 text-slate-600">109 santri memiliki NIS lengkap, gender terbagi rata (7 PA / 7 PI)</td>
                      <td className="px-4 py-3">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">Valid</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Ilmu Wasilah</td>
                      <td className="px-4 py-3 font-mono">Sheets/CSV (546 baris)</td>
                      <td className="px-4 py-3">111 Santri, 13 Level</td>
                      <td className="px-4 py-3 text-slate-600">
                        108 nama cocok Al-Qur&apos;an, 3 nama baru butuh NIS resmi. Jadwal pembelajaran belum disertakan.
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">Butuh Verifikasi</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">Ilmu Ghayah</td>
                      <td className="px-4 py-3 font-mono">Docs/TXT (184 baris)</td>
                      <td className="px-4 py-3">107 Santri, 11 Kelompok</td>
                      <td className="px-4 py-3 text-slate-600">
                        107 cocok dengan NIS Al-Qur&apos;an. 1 santri putri tercatat di kelompok putra butuh konfirmasi musyawarah.
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">Butuh Verifikasi</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action items needing human decision */}
              <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-amber-900">Catatan Otoritas Musyawarah Asatidzah:</span>
                    <p className="text-amber-800 mt-1 leading-relaxed">
                      Sesuai Dokumen Spesifikasi Induk KUSAFA, sistem tidak mengambil keputusan penempatan atau penetapan identitas santri secara sepihak. Keputusan penetapan 3 nama Wasilah dan konfirmasi penempatan 1 santri putri diserahkan kepada musyawarah asatidzah pada antarmuka admin/mas&apos;ul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
