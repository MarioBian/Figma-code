import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-3">
    <a className="btn btn-ghost ml-10 text-xl">Shadient.co</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Company</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Services</a></li>
      <li><a>Resources</a></li>
    </ul>
    <button type="button" class="text-yellow-600 border border-yellow-600 font-medium rounded-sm text-sm px-6 py-0.5 text-center me-2 mb-2 ">Contact</button>

  </div>
</div>
  )
}

export default NavBar