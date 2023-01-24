import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Sixth({onChange,
  lamp_types_six,
  lamp_stabilityes_six,
  sixth_deviation_one, 
  sixth_deviation_two, 
  sixth_deviation_three,
  sixth_deviation_four,
  sixth_deviation_five,
  sixth_deviation_six, 
  sixth_deviation_seven,
  sixth_deviation_eight,
  sixth_deviation_nine,
  sixth_deviation_ten,
  one_measurement_results_sixth,
  two_measurement_results_sixth,
  three_measurement_results_sixth,
  four_measurement_results_sixth,
  five_measurement_results_sixth,
  six_measurement_results_sixth,
  seven_measurement_results_sixth,
  eight_measurement_results_sixth,
  nine_measurement_results_sixth,
  ten_measurement_results_sixth,
  one_extended_uncertaintyes_sixth,
  two_extended_uncertaintyes_sixth,
  three_extended_uncertaintyes_sixth,
  four_extended_uncertaintyes_sixth,
  five_extended_uncertaintyes_sixth,
  six_extended_uncertaintyes_sixth,
  seven_extended_uncertaintyes_sixth,
  eight_extended_uncertaintyes_sixth,
  nine_extended_uncertaintyes_sixth,
  ten_extended_uncertaintyes_sixth,
  oneIllum_references_sixth,
  twoIllum_references_sixth,
  threeIllum_references_sixth,
  fourIllum_references_sixth,
  fiveIllum_references_sixth,
  sixIllum_references_sixth,
  sevenIllum_references_sixth,
  eightIllum_references_sixth,
  nineIllum_references_sixth,
  tenIllum_references_sixth,
}) {

const [Sixth_deviation_one, setSixth_Deviation_one] = useState(null);
const [Sixth_deviation_two, setSixth_Deviation_two] = useState(null);
const [Sixth_deviation_three, setSixth_Deviation_three] = useState(null);
const [Sixth_deviation_four, setSixth_Deviation_four] = useState(null);
const [Sixth_deviation_five, setSixth_Deviation_five] = useState(null);
const [Sixth_deviation_six, setSixth_Deviation_six] = useState(null);
const [Sixth_deviation_seven, setSixth_Deviation_seven] = useState(null);
const [Sixth_deviation_eight, setSixth_Deviation_eight] = useState(null);
const [Sixth_deviation_nine, setSixth_Deviation_nine] = useState(null);
const [Sixth_deviation_ten, setSixth_Deviation_ten] = useState(null);

const one_calkDeviation_sixth = () => {
  const Sixth_deviation_one = (((one_measurement_results_sixth-oneIllum_references_sixth)/oneIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_one(Sixth_deviation_one);
  }
const one_clearDeviation_sixth = () => {
  setSixth_Deviation_one('');
  };

const two_calkDeviation_sixth = () => {
  const Sixth_deviation_two = (((two_measurement_results_sixth-twoIllum_references_sixth)/twoIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_two(Sixth_deviation_two);
  }
const two_clearDeviation = () => {
  setSixth_Deviation_two('');
  };
const three_calkDeviation_sixth = () => {
  const Sixth_deviation_three = (((three_measurement_results_sixth-threeIllum_references_sixth)/threeIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_three(Sixth_deviation_three);
  }
const three_clearDeviation = () => {
  setSixth_Deviation_three('');
  };
const four_calkDeviation_sixth = () => {
  const Sixth_deviation_four = (((four_measurement_results_sixth-fourIllum_references_sixth)/fourIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_four(Sixth_deviation_four);
  }
const four_clearDeviation = () => {
  setSixth_Deviation_four('');
  };
const five_calkDeviation_sixth = () => {
  const Sixth_deviation_five = (((five_measurement_results_sixth-fiveIllum_references_sixth)/fiveIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_five(Sixth_deviation_five);
  }
const five_clearDeviation = () => {
  setSixth_Deviation_five('');
  };
const six_calkDeviation_sixth = () => {
  const Sixth_deviation_six = (((six_measurement_results_sixth-sixIllum_references_sixth)/sixIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_six(Sixth_deviation_six);
  }
const six_clearDeviation = () => {
  setSixth_Deviation_six('');
  };
const seven_calkDeviation_sixth = () => {
  const Sixth_deviation_seven = (((seven_measurement_results_sixth-sevenIllum_references_sixth)/sevenIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_seven(Sixth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setSixth_Deviation_seven('');
  };
const eight_calkDeviation_sixth = () => {
  const Sixth_deviation_eight = (((eight_measurement_results_sixth-eightIllum_references_sixth)/eightIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_eight(Sixth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setSixth_Deviation_eight('');
  };
const nine_calkDeviation_sixth = () => {
  const Sixth_deviation_nine = (((nine_measurement_results_sixth-nineIllum_references_sixth)/nineIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_nine(Sixth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setSixth_Deviation_nine('');
  };
const ten_calkDeviation_sixth = () => {
  const Sixth_deviation_ten = (((ten_measurement_results_sixth-tenIllum_references_sixth)/tenIllum_references_sixth)*100).toFixed(2)
  setSixth_Deviation_ten(Sixth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setSixth_Deviation_ten('');
  };

  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_six'
      value={lamp_type.name}
      checked={lamp_types_six === lamp_type.name}
      onChange={onChange}
      type="radio" 
      />{lamp_type.name}
      </label>
      </div>  
      )}
    </div> 
    <h4>Стабилност на лампата:</h4>
    <div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_six'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_six ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_six'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_six === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="oneIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='oneIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={oneIllum_references_sixth === "" ? "Избери" 
    : oneIllum_references_sixth} hidden="hidden">
    {oneIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={oneIllum_references_sixth===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="one_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={one_measurement_results_sixth} 
    name='one_measurement_results_sixth' id='one_measurement_results_sixth' />
    </div>
    <div className="form-group">
    <label htmlFor="one_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={one_extended_uncertaintyes_sixth} 
    name='one_extended_uncertaintyes_sixth' id='one_extended_uncertaintyes_sixth' />
    </div>

<div className="form-group">
<p onClick={one_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_one}
   name='sixth_deviation_one' id='sixth_deviation_one' />
    <label htmlFor="sixth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_sixth} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twoIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='twoIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={twoIllum_references_sixth === "" ? "Избери" 
    : twoIllum_references_sixth} hidden="hidden">
    {twoIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twoIllum_references_sixth===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="two_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={two_measurement_results_sixth} 
    name='two_measurement_results_sixth' id='two_measurement_results_sixth' />
    </div>
    <div className="form-group">
    <label htmlFor="two_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={two_extended_uncertaintyes_sixth} 
    name='two_extended_uncertaintyes_sixth' id='two_extended_uncertaintyes_sixth' />
    </div>


    <div className="form-group">
<p onClick={two_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_two}
   name='sixth_deviation_two' id='sixth_deviation_two' />
    <label htmlFor="sixth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="threeIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='threeIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={threeIllum_references_sixth === "" ? "Избери" 
    : threeIllum_references_sixth} hidden="hidden">
    {threeIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={threeIllum_references_sixth===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="three_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={three_measurement_results_sixth} 
    name='three_measurement_results_sixth' id='three_measurement_results_sixth' />
    </div>
    <div className="form-group">
    <label htmlFor="three_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={three_extended_uncertaintyes_sixth} 
    name='three_extended_uncertaintyes_sixth' id='three_extended_uncertaintyes_sixth' />
    </div>
    <div className="form-group">
<p onClick={three_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_three}
   name='sixth_deviation_three' id='sixth_deviation_three' />
    <label htmlFor="sixth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='fourIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={fourIllum_references_sixth === "" ? "Избери" 
    : fourIllum_references_sixth} hidden="hidden">
    {fourIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourIllum_references_sixth===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="four_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={four_measurement_results_sixth} 
    name='four_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="four_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={four_extended_uncertaintyes_sixth} 
    name='four_extended_uncertaintyes_sixth'  />
    </div>
    <div className="form-group">
<p onClick={four_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_four}
   name='sixth_deviation_four' id='sixth_deviation_four' />
    <label htmlFor="sixth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fiveIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='fiveIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={fiveIllum_references_sixth === "" ? "Избери" 
    : fiveIllum_references_sixth} hidden="hidden">
    {fiveIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fiveIllum_references_sixth===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="five_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={five_measurement_results_sixth} 
    name='five_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="five_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={five_extended_uncertaintyes_sixth} 
    name='five_extended_uncertaintyes_sixth'  />
    </div>
    <div className="form-group">
<p onClick={five_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_five}
   name='sixth_deviation_five' id='sixth_deviation_five' />
    <label htmlFor="sixth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sixIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='sixIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={sixIllum_references_sixth === "" ? "Избери" 
    : sixIllum_references_sixth} hidden="hidden">
    {sixIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sixIllum_references_sixth===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="six_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={six_measurement_results_sixth} 
    name='six_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="six_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={six_extended_uncertaintyes_sixth} 
    name='six_extended_uncertaintyes_sixth'  />
    </div>
    <div className="form-group">
<p onClick={six_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_six}
   name='sixth_deviation_six' id='sixth_deviation_six' />
    <label htmlFor="sixth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sevenIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='sevenIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={sevenIllum_references_sixth === "" ? "Избери" 
    : sevenIllum_references_sixth} hidden="hidden">
    {sevenIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sevenIllum_references_sixth===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seven_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seven_measurement_results_sixth} 
    name='seven_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="seven_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seven_extended_uncertaintyes_sixth} 
    name='seven_extended_uncertaintyes_sixth'  />
    </div>
 <div className="form-group">
<p onClick={seven_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_seven}
   name='sixth_deviation_seven' id='sixth_deviation_seven' />
    <label htmlFor="sixth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eightIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='eightIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={eightIllum_references_sixth === "" ? "Избери" 
    : eightIllum_references_sixth} hidden="hidden">
    {eightIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eightIllum_references_sixth===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eight_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eight_measurement_results_sixth} 
    name='eight_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="eight_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eight_extended_uncertaintyes_sixth} 
    name='eight_extended_uncertaintyes_sixth'  />
    </div>
    <div className="form-group">
<p onClick={eight_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_eight}
   name='sixth_deviation_eight' id='sixth_deviation_eight' />
    <label htmlFor="sixth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="nineIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='nineIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={nineIllum_references_sixth === "" ? "Избери" 
    : nineIllum_references_sixth} hidden="hidden">
    {nineIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={nineIllum_references_sixth===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="nine_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={nine_measurement_results_sixth} 
    name='nine_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="nine_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={nine_extended_uncertaintyes_sixth} 
    name='nine_extended_uncertaintyes_sixth'  />
    </div>
 <div className="form-group">
<p onClick={nine_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_nine}
   name='sixth_deviation_nine' id='sixth_deviation_nine' />
    <label htmlFor="sixth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenIllum_references_sixth">Стойност на осветеността:</label>
    <select  name='tenIllum_references_sixth'onChange={onChange} 
    >
    <option value="" isselected={tenIllum_references_sixth === "" ? "Избери" 
    : tenIllum_references_sixth} hidden="hidden">
    {tenIllum_references_sixth}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenIllum_references_sixth===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ten_measurement_results_sixth">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ten_measurement_results_sixth} 
    name='ten_measurement_results_sixth'  />
    </div>
    <div className="form-group">
    <label htmlFor="ten_extended_uncertaintyes_sixth">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ten_extended_uncertaintyes_sixth} 
    name='ten_extended_uncertaintyes_sixth'  />
    </div>
    <div className="form-group">
<p onClick={ten_calkDeviation_sixth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Sixth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={sixth_deviation_ten}
   name='sixth_deviation_ten' id='sixth_deviation_ten' />
    <label htmlFor="sixth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    </div>
    )
}
export default Sixth