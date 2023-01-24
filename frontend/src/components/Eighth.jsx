import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Eighth({onChange,
  lamp_types_eight,
  lamp_stabilityes_eight,
  eighth_deviation_one, 
  eighth_deviation_two, 
  eighth_deviation_three,
  eighth_deviation_four,
  eighth_deviation_five,
  eighth_deviation_six, 
  eighth_deviation_seven,
  eighth_deviation_eight,
  eighth_deviation_nine,
  eighth_deviation_ten,
  eighth_measurement_results_one,
  eighth_measurement_results_two,
  eighth_measurement_results_three,
  eighth_measurement_results_four,
  eighth_measurement_results_five,
  eighth_measurement_results_six,
  eighth_measurement_results_seven,
  eighth_measurement_results_eight,
  eighth_measurement_results_nine,
  eighth_measurement_results_ten,
  eighth_extended_uncertaintyes_one,
  eighth_extended_uncertaintyes_two,
  eighth_extended_uncertaintyes_three,
  eighth_extended_uncertaintyes_four,
  eighth_extended_uncertaintyes_five,
  eighth_extended_uncertaintyes_six,
  eighth_extended_uncertaintyes_seven,
  eighth_extended_uncertaintyes_eight,
  eighth_extended_uncertaintyes_nine,
  eighth_extended_uncertaintyes_ten,
  eighth_Illum_references_one,
  eighth_Illum_references_two,
  eighth_Illum_references_three,
  eighth_Illum_references_four,
  eighth_Illum_references_five,
  eighth_Illum_references_six,
  eighth_Illum_references_seven,
  eighth_Illum_references_eight,
  eighth_Illum_references_nine,
  eighth_Illum_references_ten}) {


const [Eighth_deviation_one, setEighth_Deviation_one] = useState(null);
const [Eighth_deviation_two, setEighth_Deviation_two] = useState(null);
const [Eighth_deviation_three, setEighth_Deviation_three] = useState(null);
const [Eighth_deviation_four, setEighth_Deviation_four] = useState(null);
const [Eighth_deviation_five, setEighth_Deviation_five] = useState(null);
const [Eighth_deviation_six, setEighth_Deviation_six] = useState(null);
const [Eighth_deviation_seven, setEighth_Deviation_seven] = useState(null);
const [Eighth_deviation_eight, setEighth_Deviation_eight] = useState(null);
const [Eighth_deviation_nine, setEighth_Deviation_nine] = useState(null);
const [Eighth_deviation_ten, setEighth_Deviation_ten] = useState(null);

const one_calkDeviation_eighth = () => {
  const Eighth_deviation_one = (((eighth_measurement_results_one-eighth_Illum_references_one)/eighth_Illum_references_one)*100).toFixed(2)
  setEighth_Deviation_one(Eighth_deviation_one);
  }
const one_clearDeviation_eighth = () => {
  setEighth_Deviation_one('');
  };

const two_calkDeviation_eighth = () => {
  const Eighth_deviation_two = (((eighth_measurement_results_two-eighth_Illum_references_two)/eighth_Illum_references_two)*100).toFixed(2)
  setEighth_Deviation_two(Eighth_deviation_two);
  }
const two_clearDeviation = () => {
  setEighth_Deviation_two('');
  };
const three_calkDeviation_eighth = () => {
  const Eighth_deviation_three = (((eighth_measurement_results_three-eighth_Illum_references_three)/eighth_Illum_references_three)*100).toFixed(2)
  setEighth_Deviation_three(Eighth_deviation_three);
  }
const three_clearDeviation = () => {
  setEighth_Deviation_three('');
  };
const four_calkDeviation_eighth = () => {
  const Eighth_deviation_four = (((eighth_measurement_results_four-eighth_Illum_references_four)/eighth_Illum_references_four)*100).toFixed(2)
  setEighth_Deviation_four(Eighth_deviation_four);
  }
const four_clearDeviation = () => {
  setEighth_Deviation_four('');
  };
const five_calkDeviation_eighth = () => {
  const Eighth_deviation_five = (((eighth_measurement_results_five-eighth_Illum_references_five)/eighth_Illum_references_five)*100).toFixed(2)
  setEighth_Deviation_five(Eighth_deviation_five);
  }
const five_clearDeviation = () => {
  setEighth_Deviation_five('');
  };
const six_calkDeviation_eighth = () => {
  const Eighth_deviation_six = (((eighth_measurement_results_six-eighth_Illum_references_six)/eighth_Illum_references_six)*100).toFixed(2)
  setEighth_Deviation_six(Eighth_deviation_six);
  }
const six_clearDeviation = () => {
  setEighth_Deviation_six('');
  };
const seven_calkDeviation_eighth = () => {
  const Eighth_deviation_seven = (((eighth_measurement_results_seven-eighth_Illum_references_seven)/eighth_Illum_references_seven)*100).toFixed(2)
  setEighth_Deviation_seven(Eighth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setEighth_Deviation_seven('');
  };
const eight_calkDeviation_eighth = () => {
  const Eighth_deviation_eight = (((eighth_measurement_results_eight-eighth_Illum_references_eight)/eighth_Illum_references_eight)*100).toFixed(2)
  setEighth_Deviation_eight(Eighth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setEighth_Deviation_eight('');
  };
const nine_calkDeviation_eighth = () => {
  const Eighth_deviation_nine = (((eighth_measurement_results_nine-eighth_Illum_references_nine)/eighth_Illum_references_nine)*100).toFixed(2)
  setEighth_Deviation_nine(Eighth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setEighth_Deviation_nine('');
  };
const ten_calkDeviation_eighth = () => {
  const Eighth_deviation_ten = (((eighth_measurement_results_ten-eighth_Illum_references_ten)/eighth_Illum_references_ten)*100).toFixed(2)
  setEighth_Deviation_ten(Eighth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setEighth_Deviation_ten('');
  };


  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_eight'
      value={lamp_type.name}
      checked={lamp_types_eight === lamp_type.name}
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
    name='lamp_stabilityes_eight'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_eight ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_eight'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_eight === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_one">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_one === "" ? "Избери" 
    : eighth_Illum_references_one} hidden="hidden">
    {eighth_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_one} 
    name='eighth_measurement_results_one' id='eighth_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_one} 
    name='eighth_extended_uncertaintyes_one' id='eighth_extended_uncertaintyes_one' />
    </div>
    <div className="form-group">
<p onClick={one_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_one}
   name='eighth_deviation_one' id='eighth_deviation_one' />
    <label htmlFor="eighth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_eighth} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_two">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_two === "" ? "Избери" 
    : eighth_Illum_references_two} hidden="hidden">
    {eighth_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_two} 
    name='eighth_measurement_results_two' id='eighth_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_two} 
    name='eighth_extended_uncertaintyes_two' id='eighth_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_two}
   name='eighth_deviation_two' id='eighth_deviation_two' />
    <label htmlFor="eighth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_three">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_three === "" ? "Избери" 
    : eighth_Illum_references_three} hidden="hidden">
    {eighth_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_three} 
    name='eighth_measurement_results_three' id='eighth_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_three} 
    name='eighth_extended_uncertaintyes_three' id='eighth_extended_uncertaintyes_three' />
    </div>

<div className="form-group">
<p onClick={three_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_three}
   name='eighth_deviation_three' id='eighth_deviation_three' />
    <label htmlFor="eighth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_four">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_four === "" ? "Избери" 
    : eighth_Illum_references_four} hidden="hidden">
    {eighth_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={eighth_measurement_results_four} 
    name='eighth_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_four} 
    name='eighth_extended_uncertaintyes_four'  />
    </div>

<div className="form-group">
<p onClick={four_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_four}
   name='eighth_deviation_four' id='eighth_deviation_four' />
    <label htmlFor="eighth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_five">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_five === "" ? "Избери" 
    : eighth_Illum_references_five} hidden="hidden">
    {eighth_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_five} 
    name='eighth_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_five} 
    name='eighth_extended_uncertaintyes_five'  />
    </div>
<div className="form-group">
<p onClick={five_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_five}
   name='eighth_deviation_five' id='eighth_deviation_five' />
    <label htmlFor="eighth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_six">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_six === "" ? "Избери" 
    : eighth_Illum_references_six} hidden="hidden">
    {eighth_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_six} 
    name='eighth_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_six} 
    name='eighth_extended_uncertaintyes_six'  />
    </div>

    <div className="form-group">
<p onClick={six_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_six}
   name='eighth_deviation_six' id='eighth_deviation_six' />
    <label htmlFor="eighth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_seven === "" ? "Избери" 
    : eighth_Illum_references_seven} hidden="hidden">
    {eighth_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_seven} 
    name='eighth_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_seven} 
    name='eighth_extended_uncertaintyes_seven'  />
    </div>

<div className="form-group">
<p onClick={seven_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_seven}
   name='eighth_deviation_seven' id='eighth_deviation_seven' />
    <label htmlFor="eighth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_eight === "" ? "Избери" 
    : eighth_Illum_references_eight} hidden="hidden">
    {eighth_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_eight} 
    name='eighth_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_eight} 
    name='eighth_extended_uncertaintyes_eight'  />
    </div>

<div className="form-group">
<p onClick={eight_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_eight}
   name='eighth_deviation_eight' id='eighth_deviation_eight' />
    <label htmlFor="eighth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_nine === "" ? "Избери" 
    : eighth_Illum_references_nine} hidden="hidden">
    {eighth_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_nine} 
    name='eighth_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_nine} 
    name='eighth_extended_uncertaintyes_nine'  />
    </div>

<div className="form-group">
<p onClick={nine_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_nine}
   name='eighth_deviation_nine' id='eighth_deviation_nine' />
    <label htmlFor="eighth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eighth_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='eighth_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={eighth_Illum_references_ten === "" ? "Избери" 
    : eighth_Illum_references_ten} hidden="hidden">
    {eighth_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eighth_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eighth_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_measurement_results_ten} 
    name='eighth_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="eighth_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eighth_extended_uncertaintyes_ten} 
    name='eighth_extended_uncertaintyes_ten'  />
    </div>

<div className="form-group">
<p onClick={ten_calkDeviation_eighth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Eighth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eighth_deviation_ten}
   name='eighth_deviation_ten' id='eighth_deviation_ten' />
    <label htmlFor="eighth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    </div>
    )
}
export default Eighth