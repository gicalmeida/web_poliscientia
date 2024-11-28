import React from 'react';
import '../../App2.css';
import { Link } from 'react-router-dom';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div className='icon_header'> MENU </div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/salaNova">
            <BsFillGrid3X3GapFill className='icon' /> Criar nova sala
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/login">
            <BsMenuButtonWideFill className='icon' /> Cadastrar Professor
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/salaVirtual">
            <BsFillArchiveFill className='icon' /> Editar sala
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/editar-login/:id_professor">
            <BsGrid1X2Fill className='icon' /> Editar professor
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/excluirLogin">
            <BsListCheck className='icon' /> Excluir Professor
          </Link>
        </li>
        <li className='sidebar-list-item'> 
          <Link to="/salaVirtual">
            <BsPeopleFill className='icon' /> Monitorar alunos
          </Link>
        </li>
        
        <li className='sidebar-list-item'>
          <Link to="">
            <BsFillGearFill className='icon' /> Configurações
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
