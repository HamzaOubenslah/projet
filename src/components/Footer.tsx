const footerLinks = {
  Home: ["About us", "Technologie"],
  Industry: ["Industrial","Agriculture", "Building", "Security", "Energy"],
  Investors: ["Projects", "Finance", "Statements", "Projections"],
  Company: ["Purpose", "Innovation", "Partners", "Carrier","Affiliate"],
};

export default function Footer() {
  return (
    <footer className="bg-[#06141B] border-t border-[#1e2a1e] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
       
          <div className="max-w-xs">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[#4ADE80] text-xl font-bold">⚡</span>
              <span className="text-white font-bold text-lg tracking-tight">eaneer</span>
            </div>
            <p className="text-white-500 text-5xs leading-relaxed mb-1">
              Contact Eaneer for the Energy Future
            </p>
            <p className="text-white-600 text-xs leading-relaxed">
              Contact Eaneer for Innovative Energy Solutions.
              Transform Your Vision Into Reality with Speed,
              Efficiency and Savings.
            </p>
          </div>

       
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">{category}</h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <span
                        className="text-white-500 text-xs cursor-not-allowed hover:text-gray-400 transition-colors select-none"
                        title="Coming soon"
                      >
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
        <div className="border-t border-[#1e2a1e] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-white-600 text-xs">
            <span className="cursor-not-allowed hover:text-gray-400 transition-colors select-none">Privacy Policy</span>
            <span className="cursor-not-allowed hover:text-gray-400 transition-colors select-none">Term of service</span>
            <span className="cursor-not-allowed hover:text-gray-400 transition-colors select-none">Accessibility</span>
            <span className="cursor-not-allowed hover:text-gray-400 transition-colors select-none">Contact</span>
            <span className="cursor-not-allowed hover:text-gray-400 transition-colors select-none">Legal</span>
          </div>
          <p className="text-white-600 text-xs">
            © Eaneer 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}