import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Tenth({onChange,
  lamp_types_ten ,
  lamp_stabilityes_ten,
  tenth_deviation_one, 
  tenth_deviation_two, 
  tenth_deviation_three,
  tenth_deviation_four,
  tenth_deviation_five,
  tenth_deviation_six, 
  tenth_deviation_seven,
  tenth_deviation_eight,
  tenth_deviation_nine,
  tenth_deviation_ten,
  tenth_measurement_results_one,
  tenth_measurement_results_two,
  tenth_measurement_results_three,
  tenth_measurement_results_four,
  tenth_measurement_results_five,
  tenth_measurement_results_six,
  tenth_measurement_results_seven,
  tenth_measurement_results_eight,
  tenth_measurement_results_nine,
  tenth_measurement_results_ten,
  tenth_extended_uncertaintyes_one,
  tenth_extended_uncertaintyes_two,
  tenth_extended_uncertaintyes_three,
  tenth_extended_uncertaintyes_four,
  tenth_extended_uncertaintyes_five,
  tenth_extended_uncertaintyes_six,
  tenth_extended_uncertaintyes_seven,
  tenth_extended_uncertaintyes_eight,
  tenth_extended_uncertaintyes_nine,
  tenth_extended_uncertaintyes_ten,
  tenth_Illum_references_one,
  tenth_Illum_references_two,
  tenth_Illum_references_three,
  tenth_Illum_references_four,
  tenth_Illum_references_five,
  tenth_Illum_references_six,
  tenth_Illum_references_seven,
  tenth_Illum_references_eight,
  tenth_Illum_references_nine,
  tenth_Illum_references_ten,
}) {

const [Tenth_deviation_one, setTenth_Deviation_one] = useState(null);
const [Tenth_deviation_two, setTenth_Deviation_two] = useState(null);
const [Tenth_deviation_three, setTenth_Deviation_three] = useState(null);
const [Tenth_deviation_four, setTenth_Deviation_four] = useState(null);
const [Tenth_deviation_five, setTenth_Deviation_five] = useState(null);
const [Tenth_deviation_six, setTenth_Deviation_six] = useState(null);
const [Tenth_deviation_seven, setTenth_Deviation_seven] = useState(null);
const [Tenth_deviation_eight, setTenth_Deviation_eight] = useState(null);
const [Tenth_deviation_nine, setTenth_Deviation_nine] = useState(null);
const [Tenth_deviation_ten, setTenth_Deviation_ten] = useState(null);

const one_calkDeviation_tenth = () => {
  const Tenth_deviation_one = (((tenth_measurement_results_one-tenth_Illum_references_one)/tenth_Illum_references_one)*100).toFixed(2)
  setTenth_Deviation_one(Tenth_deviation_one);
  }
const one_clearDeviation_tenth = () => {
  setTenth_Deviation_one('');
  };

const two_calkDeviation_tenth = () => {
  const Tenth_deviation_two = (((tenth_measurement_results_two-tenth_Illum_references_two)/tenth_Illum_references_two)*100).toFixed(2)
  setTenth_Deviation_two(Tenth_deviation_two);
  }
const two_clearDeviation = () => {
  setTenth_Deviation_two('');
  };
const three_calkDeviation_tenth = () => {
  const Tenth_deviation_three = (((tenth_measurement_results_three-tenth_Illum_references_three)/tenth_Illum_references_three)*100).toFixed(2)
  setTenth_Deviation_three(Tenth_deviation_three);
  }
const three_clearDeviation = () => {
  setTenth_Deviation_three('');
  };
const four_calkDeviation_tenth = () => {
  const Tenth_deviation_four = (((tenth_measurement_results_four-tenth_Illum_references_four)/tenth_Illum_references_four)*100).toFixed(2)
  setTenth_Deviation_four(Tenth_deviation_four);
  }
const four_clearDeviation = () => {
  setTenth_Deviation_four('');
  };
const five_calkDeviation_tenth = () => {
  const Tenth_deviation_five = (((tenth_measurement_results_five-tenth_Illum_references_five)/tenth_Illum_references_five)*100).toFixed(2)
  setTenth_Deviation_five(Tenth_deviation_five);
  }
const five_clearDeviation = () => {
  setTenth_Deviation_five('');
  };
const six_calkDeviation_tenth = () => {
  const Tenth_deviation_six = (((tenth_measurement_results_six-tenth_Illum_references_six)/tenth_Illum_references_six)*100).toFixed(2)
  setTenth_Deviation_six(Tenth_deviation_six);
  }
const six_clearDeviation = () => {
  setTenth_Deviation_six('');
  };
const seven_calkDeviation_tenth = () => {
  const Tenth_deviation_seven = (((tenth_measurement_results_seven-tenth_Illum_references_seven)/tenth_Illum_references_seven)*100).toFixed(2)
  setTenth_Deviation_seven(Tenth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setTenth_Deviation_seven('');
  };
const eight_calkDeviation_tenth = () => {
  const Tenth_deviation_eight = (((tenth_measurement_results_eight-tenth_Illum_references_eight)/tenth_Illum_references_eight)*100).toFixed(2)
  setTenth_Deviation_eight(Tenth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setTenth_Deviation_eight('');
  };
const nine_calkDeviation_tenth = () => {
  const Tenth_deviation_nine = (((tenth_measurement_results_nine-tenth_Illum_references_nine)/tenth_Illum_references_nine)*100).toFixed(2)
  setTenth_Deviation_nine(Tenth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setTenth_Deviation_nine('');
  };
const ten_calkDeviation_tenth = () => {
  const Tenth_deviation_ten = (((tenth_measurement_results_ten-tenth_Illum_references_ten)/tenth_Illum_references_ten)*100).toFixed(2)
  setTenth_Deviation_ten(Tenth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setTenth_Deviation_ten('');
  };

  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_ten'
      value={lamp_type.name}
      checked={lamp_types_ten === lamp_type.name}
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
    name='lamp_stabilityes_ten'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_ten ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_ten'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_ten === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_one">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_one === "" ? "Избери" 
    : tenth_Illum_references_one} hidden="hidden">
    {tenth_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_one} 
    name='tenth_measurement_results_one' id='tenth_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_one} 
    name='tenth_extended_uncertaintyes_one' id='tenth_extended_uncertaintyes_one' />
    </div>
    <div className="form-group">
<p onClick={one_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_one}
   name='tenth_deviation_one' id='tenth_deviation_one' />
    <label htmlFor="tenth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_tenth} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_two">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_two === "" ? "Избери" 
    : tenth_Illum_references_two} hidden="hidden">
    {tenth_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_two} 
    name='tenth_measurement_results_two' id='tenth_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_two} 
    name='tenth_extended_uncertaintyes_two' id='tenth_extended_uncertaintyes_two' />
    </div>
<div className="form-group">
<p onClick={two_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_two}
   name='tenth_deviation_two' id='tenth_deviation_two' />
    <label htmlFor="tenth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_three">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_three === "" ? "Избери" 
    : tenth_Illum_references_three} hidden="hidden">
    {tenth_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_three} 
    name='tenth_measurement_results_three' id='tenth_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_three} 
    name='tenth_extended_uncertaintyes_three' id='tenth_extended_uncertaintyes_three' />
    </div>


<div className="form-group">
<p onClick={three_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_three}
   name='tenth_deviation_three' id='tenth_deviation_three' />
    <label htmlFor="tenth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_four">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_four === "" ? "Избери" 
    : tenth_Illum_references_four} hidden="hidden">
    {tenth_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={tenth_measurement_results_four} 
    name='tenth_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_four} 
    name='tenth_extended_uncertaintyes_four'  />
    </div>

<div className="form-group">
<p onClick={four_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_four}
   name='tenth_deviation_four' id='tenth_deviation_four' />
    <label htmlFor="tenth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_five">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_five === "" ? "Избери" 
    : tenth_Illum_references_five} hidden="hidden">
    {tenth_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_five} 
    name='tenth_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_five} 
    name='tenth_extended_uncertaintyes_five'  />
    </div>

<div className="form-group">
<p onClick={five_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_five}
   name='tenth_deviation_five' id='tenth_deviation_five' />
    <label htmlFor="tenth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_six">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_six === "" ? "Избери" 
    : tenth_Illum_references_six} hidden="hidden">
    {tenth_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_six} 
    name='tenth_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_six} 
    name='tenth_extended_uncertaintyes_six'  />
    </div>

 <div className="form-group">
<p onClick={six_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_six}
   name='tenth_deviation_six' id='tenth_deviation_six' />
    <label htmlFor="tenth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_seven === "" ? "Избери" 
    : tenth_Illum_references_seven} hidden="hidden">
    {tenth_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_seven} 
    name='tenth_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_seven} 
    name='tenth_extended_uncertaintyes_seven'  />
    </div>

<div className="form-group">
<p onClick={seven_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_seven}
   name='tenth_deviation_seven' id='tenth_deviation_seven' />
    <label htmlFor="tenth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_eight === "" ? "Избери" 
    : tenth_Illum_references_eight} hidden="hidden">
    {tenth_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_eight} 
    name='tenth_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_eight} 
    name='tenth_extended_uncertaintyes_eight'  />
    </div>

<div className="form-group">
<p onClick={eight_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_eight}
   name='tenth_deviation_eight' id='tenth_deviation_eight' />
    <label htmlFor="tenth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>

    


    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_nine === "" ? "Избери" 
    : tenth_Illum_references_nine} hidden="hidden">
    {tenth_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_nine} 
    name='tenth_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_nine} 
    name='tenth_extended_uncertaintyes_nine'  />
    </div>

<div className="form-group">
<p onClick={nine_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_nine}
   name='tenth_deviation_nine' id='tenth_deviation_nine' />
    <label htmlFor="tenth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenth_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='tenth_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={tenth_Illum_references_ten === "" ? "Избери" 
    : tenth_Illum_references_ten} hidden="hidden">
    {tenth_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenth_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="tenth_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_measurement_results_ten} 
    name='tenth_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="tenth_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={tenth_extended_uncertaintyes_ten} 
    name='tenth_extended_uncertaintyes_ten'  />
    </div>

<div className="form-group">
<p onClick={ten_calkDeviation_tenth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Tenth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={tenth_deviation_ten}
   name='tenth_deviation_ten' id='tenth_deviation_ten' />
    <label htmlFor="tenth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    </div>
    )
}
export default Tenth