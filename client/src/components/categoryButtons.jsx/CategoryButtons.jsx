const CategoryButtons = () => {
    return ( 
        <div>
            <div className="bg-gray-800 py-4">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        <h1 className="text-white font-bold">Mi sitio web</h1>
        <ul className="flex">
          <li>
            <a href="/" className="text-white hover:text-gray-300 px-3 py-2">
              Inicio
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300 px-3 py-2">
              Acerca de
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300 px-3 py-2">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
        </div>
     );
}
 
export default CategoryButtons;