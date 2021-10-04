import { ReactNode, useState } from "react";
import {X} from 'react-feather'
import './style.css'
interface ModalProps{
    show: boolean;
    onClose:()=>void;
    children?:ReactNode
}
const Modal = ({ children,show, onClose }:ModalProps) => {
    const [value, setValue] = useState('')
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button className="btn-primary" type="button" onClick={onClose}>
            <X size={22} color="#ff2f50"/>
          </button>
          <form autoComplete="off" className="input-form">
                    <label>Title</label>
                    <input type="text" required onChange={(e) => { setValue(e.target.value) }} value={value} />
                    <button id="add" type="submit" onClick={() => { }}>Add</button>
                </form>
        </section>
      </div>
    );
  };

  export default  Modal;