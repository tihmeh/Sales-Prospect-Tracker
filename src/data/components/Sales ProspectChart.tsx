import { useState } from 'react';
import { prospects, Prospect } from '../data/prospects';

const stageColors = {
  Lead: '#94a3b8',
  Qualified: '#60a5fa',
  Proposal: '#fbbf24',
  Negotiation: '#34d399'
};

const sizeMap = {
  small: { width: 120, height: 120, fontSize: 'text-xs' },
  medium: { width: 160, height: 160, fontSize: 'text-sm' },
  large: { width: 200, height: 200, fontSize: 'text-base' }
};

// Helper function to get shortened name
function getShortName(company: string): string {
  const words = company.split(' ');
  if (words.length <= 2) return company;
  
  // Take first 2-3 words or abbreviate
  if (company.length > 20) {
    return words.slice(0, 2).join(' ');
  }
  return company;
}

// Fixed positions to prevent overlapping
const fixedPositions = [
  { x: 25, y: 35 },
  { x: 55, y: 60 },
  { x: 75, y: 30 }
];

function getPosition(index: number) {
  if (index < fixedPositions.length) {
    return { x: `${fixedPositions[index].x}%`, y: `${fixedPositions[index].y}%` };
  }
  // For additional prospects, generate grid positions
  const col = index % 4;
  const row = Math.floor(index / 4);
  return { x: `${20 + col * 25}%`, y: `${20 + row * 30}%` };
}

export function SalesProspectChart() {
  const [hoveredProspect, setHoveredProspect] = useState<Prospect | null>(null);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Bubble Container */}
      <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden">
        {prospects.map((prospect, index) => {
          const position = getPosition(index);
          const size = sizeMap[prospect.size];
          
          return (
            <div
              key={prospect.id}
              className="absolute cursor-pointer transition-transform hover:scale-110 hover:z-10"
              style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
                width: `${size.width}px`,
                height: `${size.height}px`
              }}
              onMouseEnter={() => setHoveredProspect(prospect)}
              onMouseLeave={() => setHoveredProspect(null)}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center p-4 shadow-lg border-4 border-white transition-all hover:shadow-2xl"
                style={{ backgroundColor: stageColors[prospect.stage] }}
              >
                <p className={`${size.fontSize} text-white text-center break-words`}>
                  {getShortName(prospect.company)}
                </p>
              </div>
            </div>
          );
        })}

        {/* Hover Tooltip */}
        {hoveredProspect && (
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-xl border border-slate-200 max-w-sm z-20">
            <p className="text-slate-900 mb-2">{hoveredProspect.company}</p>
            <p className="text-slate-700 text-sm mb-3">{hoveredProspect.contact}</p>
            <div className="space-y-1">
              <p className="text-slate-600 text-sm">Deal Size: ${hoveredProspect.dealSize}k</p>
              <p className="text-slate-600 text-sm">Probability: {hoveredProspect.probability}%</p>
              <p className="text-slate-600 text-sm">Stage: {hoveredProspect.stage}</p>
              <p className="text-slate-600 text-sm">Industry: {hoveredProspect.industry}</p>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center pt-4 mt-6 border-t border-slate-200">
        {Object.entries(stageColors).map(([stage, color]) => (
          <div key={stage} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: color }}
            />
            <span className="text-slate-700 text-sm">{stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
