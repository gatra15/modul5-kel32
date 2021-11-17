import './ProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function ProfileCard (props) {
    return (
        <div class="cardProfile">
            <div className="desc">
                <img src={props.image} alt="avatar.jpg" className="gambar"/>
            </div>
            <div class="classView">
                <p class="nama">{props.nama}</p>
                <p class="uraian"> {props.desc} </p>
                
                <div class="classButton">
                    <button class="btng"> <FontAwesomeIcon icon={faGithub} /> </button> 
                    <button class="btni"> <FontAwesomeIcon icon={faInstagram} /> </button> 
                    <button class="btnw"> <FontAwesomeIcon icon={faWhatsapp} /> </button> 
                    <button class="btnl"> <FontAwesomeIcon icon={faLinkedin} /> </button> 
                </div>
                <p class="nim"> {props.nim} </p>
            </div>
            
        </div>
    );
}