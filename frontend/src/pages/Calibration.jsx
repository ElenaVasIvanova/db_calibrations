import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCalibration,
  reset,
  deleteCalibration,
} from "../features/calibrations/calibrationSlice";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getNotes,
  reset as notesReset,
  createNote,
} from "../features/notes/noteSlice";
import Modal from "react-modal";
import NoteItem from "../components/NoteItem";
import { FaPlus } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FirstItem from "../components/FirstItem";
import SecondItem from "../components/SecondItem";
import ThirdItem from "../components/ThirdItem";
import FourthItem from "../components/FourthItem";
import FifthItem from "../components/FifthItem";
import SixthItem from "../components/SixthItem";
import SeventhItem from "../components/SeventhItem";
import EighthItem from "../components/EighthItem";
import NinthItem from "../components/NinthItem";
import TenthItem from "../components/TenthItem";
import EleventhItem from "../components/EleventhItem";
import TwelfthItem from "../components/TwelfthItem";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
},
};
Modal.setAppElement("#root");
function Calibration() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [noteText, setNoteText] = useState("");
  const [showOne, setshowOne] = useState("");
  const [showTwo, setshowTwo] = useState("");
  const [showThree, setshowThree] = useState("");
  const [showFour, setshowFour] = useState("");
  const [showFive, setshowFive] = useState("");
  const [showSix, setshowSix] = useState("");
  const [showSeven, setshowSeven] = useState("");
  const [showEighth, setshowEighth] = useState("");
  const [showNine, setshowNine] = useState("");
  const [showTen, setshowTen] = useState("");
  const [showEleven, setshowEleven] = useState("");
  const [showTwelve, setshowTwelve] = useState("");
  const { calibration, isSuccess, isLoading, message, isError } = useSelector(
    (state) => state.calibration
    );
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
    );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { calibrationId} = useParams();
  useEffect(() => {
    dispatch(getCalibration(calibrationId));
    dispatch(getNotes(calibrationId));
    if (isError) {
      toast.error(message);
  }
  if (isSuccess) {
      dispatch(reset());
  }
    // eslint-disable-next-line
}, [isError, message, calibrationId]);
  const onDeleteCalibration = () => {
    dispatch(deleteCalibration(calibrationId));
    navigate("/");
    toast.success("Калибрирането е изтрито");
};
const onShowOne = () => {
    setshowOne(!showOne) 
};
const onShowTwo = () => {
    setshowTwo(!showTwo) 
};
const onShowThree = () => {
    setshowThree(!showThree) 
};
const onShowFour = () => {
    setshowFour(!showFour) 
};
const onShowFive = () => {
    setshowFive(!showFive) 
};
const onShowSix = () => {
    setshowSix(!showSix) 
};
const onShowSeven = () => {
    setshowSeven(!showSeven) 
};
const onShowEighth = () => {
    setshowEighth(!showEighth) 
};
const onShowNine = () => {
    setshowNine(!showNine) 
};
const onShowTen = () => {
    setshowTen(!showTen) 
};
const onShowEleven = () => {
    setshowEleven(!showEleven) 
};
const onShowTwelve = () => {
    setshowTwelve(!showTwelve) 
};
if (isLoading || notesIsLoading) {
    return <Spinner />;
}
if (isError) {
    return <h3>Възникна грешка</h3>;
}
const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, calibrationId }));
    closeModal();
    setNoteText("");
};
return (
    <>
    <div className="calibration-page">
    <header className="calibration-header">
    <BackButton url="/calibrations" />
    <div className="calibration-desc">
    <div className="boxes">
    <div>
    <h4>Клиент:</h4>
    <p>{calibration.client}</p>
    <h4>Заявка №:</h4>
    <p>{calibration.application_num}</p>
    <h4>Средство за измерване:</h4>
    <p>{calibration.device}</p>
    <h4>Производител:</h4>
    <p>{calibration.manufacturer}</p>
    <h4>Тип/Модел:</h4>
    <p>{calibration.type_model}</p>
    <h4>Идентификационен №:</h4>
    <p>{calibration.identification}</p>
    <h2 className="dark_heading"> Адрес на клиента: </h2>
    <h3>Град/Село:</h3>
    <p>{calibration.town_village}</p>
    <h3>Квартал:</h3>
    <p>{calibration.quarter}</p>
    <h3>Улица:</h3>
    <p>{calibration.street}</p>
    <h3>№:</h3>
    <p>{calibration.number}</p>
    <h3>Блок:</h3>
    <p>{calibration.block}</p>
    <h3>Вход:</h3>
    <p>{calibration.еntrance}</p>
    <h3>Етаж:</h3>
    <p>{calibration.floor}</p>
    <h3>Апартамент:</h3>
    <p>{calibration.apartment}</p>
    <h2 className="dark_heading"> Адрес за сертификата: </h2>
    <h3>Град/Село:</h3>
    <p>{calibration.cer_town_village}</p>
    <h3>Квартал:</h3>
    <p>{calibration.cer_quarter}</p>
    <h3>Улица:</h3>
    <p>{calibration.cer_street}</p>
    <h3>№:</h3>
    <p>{calibration.cer_number}</p>
    <h3>Блок:</h3>
    <p>{calibration.cer_block}</p>
    <h3>Вход:</h3>
    <p>{calibration.cer_еntrance}</p>
    <h3>Етаж:</h3>
    <p>{calibration.cer_floor}</p>
    <h3>Апартамент:</h3>
    <p>{calibration.cer_apartment}</p>
    </div>
    <div>
    <h2 className="dark_heading"> Данни за калибрирането: </h2>
    <h3>№ на СК:</h3>
    <p>{calibration.num_calibration_certificate}</p>
    <h3>Дата на издаване:</h3>
    <p>{calibration.data_calibration_certificate}</p>
    <h3>Брой страници:</h3>
    <p>{calibration.number_pages}</p>
    <h3>Дата на калибриране:</h3>
    <p>{calibration.calibration_date}</p>
    <h3>№ на първичен протокол:</h3>
    <p>{calibration.primary_list}</p>
    <h3>№ във входящ дневник:</h3>
    <p>{calibration.incoming_num}</p>
    <h3>Сума за калибриране:</h3>
    <p>{calibration.price}</p>
    <h3>№ на фактура:</h3>
    <p>{calibration.invoice}</p>
    <h3>Извършил калибрирането:</h3>
    <p>{calibration.performed}</p>
    <h3>Метод (методика) на калибриране:</h3>
    <p>{calibration.calibration_method}</p>
    <h3>Лого:</h3>
    <p>{calibration.logos}</p>
    <h3>Метрологична проследимост:</h3>
    <p>{calibration.metrological_traceabilityes}</p>
    <h3>Температура на въздуха &#x2103; : </h3>
    <p>{calibration.air_temperature}</p>
    <h3>Температура на въздуха &#x2103; ±:</h3>
    <p>{calibration.air_temperature_un}</p>
    <h3>Влажност на въздуха %:</h3>
    <p>{calibration.relative_humidity}</p>
    <h3>Влажност % ±:</h3>
    <p>{calibration.relative_humidity_un}</p>
   
</div>
</div>
</div>
<div>
<Tabs align="center"
>
<TabList>
<Tab>Металхалогенна лампа</Tab>
<Tab>Лампа с нажежаема жичка</Tab>
<Tab>Philips - Луминисцентна лампа/6500K</Tab>
<Tab>Parathom classic A60/2700K warm white</Tab>
<Tab>Ultralux/2700K warm white</Tab>
<Tab>Star classic А25/3000K</Tab>
<Tab>VT-1864/4500K</Tab>
<Tab>VIVALUX/Viva/6400K cool white</Tab>
<Tab>VIVALUX/Viva/6400K warm white</Tab>
<Tab>OSRAM-Германия/6500K daylight</Tab>
<Tab>Luminescent lamp/6500K</Tab>
<Tab>Лампа с нажежаема жичка - l lux/2800K</Tab>
</TabList>
<TabPanel>
<button
onClick={onShowOne}
className="btn btn-block btn-danger"
>
Покажи резултати - Металхалогенна лампа
</button>
<div>
{showOne && <FirstItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowTwo}
className="btn btn-block btn-danger"
>
Покажи резултати - Лампа с нажежаема жичка
</button>
<div>
{showTwo && <SecondItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowThree}
className="btn btn-block btn-danger"
>
Покажи резултати - Philips - Луминисцентна лампа/6500K
</button>
<div>
{showThree && <ThirdItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowFour}
className="btn btn-block btn-danger"
>
Покажи резултати - Parathom classic A60/2700K warm white
</button>
<div>
{showFour && <FourthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowFive}
className="btn btn-block btn-danger"
>
Покажи резултати - Ultralux/2700K warm white
</button>
<div>
{showFive && <FifthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowSix}
className="btn btn-block btn-danger"
>
Покажи резултати - Star classic А25/3000K
</button>
<div>
{showSix && <SixthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowSeven}
className="btn btn-block btn-danger"
>
Покажи резултати - VT-1864/4500K
</button>
<div>
{showSeven && <SeventhItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowEighth}
className="btn btn-block btn-danger"
>
Покажи резултати - VIVALUX/Viva/6400K cool white
</button>
<div>
{showEighth && <EighthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowNine}
className="btn btn-block btn-danger"
>
Покажи резултати - VIVALUX/Viva/6400K warm white
</button>
<div>
{showNine && <NinthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>    
<TabPanel>
<button
onClick={onShowTen}
className="btn btn-block btn-danger"
>
Покажи резултати - OSRAM-Германия/6500K daylight
</button>
<div>
{showTen && <TenthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowEleven}
className="btn btn-block btn-danger"
>
Покажи резултати - Luminescent lamp/6500K
</button>
<div>
{showEleven && <EleventhItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
<TabPanel>
<button
onClick={onShowTwelve}
className="btn btn-block btn-danger"
>
Покажи резултати - Лампа с нажежаема жичка - l lux/2800K
</button>
<div>
{showTwelve && <TwelfthItem key={calibration._id} calibration={calibration} />}
</div>
</TabPanel>
</Tabs>

</div>
</header>
</div>
<h2>Бележки</h2>
<div>
{notes.map((note) => (<NoteItem key={note._id} note={note} />))}
</div>
<button onClick={openModal} className="btn"><FaPlus />Добави бележка</button>
<Modal isOpen={modalIsOpen}
onRequestClose = {closeModal}
style={customStyles}
contentLabel='Добави бележка'> 
<h2>Добави бележка</h2>
<button onClick={closeModal} className="btn-close">X</button>
<form onSubmit={onNoteSubmit}>
<div className="form-group">
<textarea name="noteText" id="noteText" className="form-control"
placeholder="Въведи бележка"
value={noteText}
onChange={(e) => setNoteText(e.target.value)}
></textarea>
</div>
<div className="form-group">
<button className="btn" type="submit">Изпрати</button>
</div>
</form>
</Modal>
<div className="boxes">
<div>
<button
onClick={onDeleteCalibration}
className="btn btn-block btn-danger"
>
Изтрий калибриране
</button>
</div>
<div>
<Link to={`/update/${calibration._id}`} className="btn btn-block">
Редактирай калибриране
</Link>
</div>

</div>
</>
);
}
export default Calibration;