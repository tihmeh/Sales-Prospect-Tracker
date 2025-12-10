import { SalesProspectChart } from './components/SalesProspectChart';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Sales Pipeline Overview</h1>
          <p className="text-slate-600">Track all your prospects in one interactive bubble chart</p>
        </div>
        <SalesProspectChart />
      </div>
    </div>
  );
}
