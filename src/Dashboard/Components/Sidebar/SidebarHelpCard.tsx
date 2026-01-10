export function SidebarHelpCard() {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-[#345AFB] to-[#5c86fe] rounded-xl p-6 text-white text-center">
        <h3 className="font-semibold mb-2">Besoin d'aide?</h3>
        <p className="text-sm mb-4 opacity-90">Consultez notre centre d'aide pour plus d'informations</p>
        <button className="w-full bg-white text-[#345AFB] py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
          Centre d'aide
        </button>
      </div>
    </div>
  );
}
