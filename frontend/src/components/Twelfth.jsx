import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Twelfth({onChange,
  lamp_types_twelve ,
  lamp_stabilityes_twelve,
  twelfth_deviation_one, 
  twelfth_deviation_two, 
  twelfth_deviation_three,
  twelfth_deviation_four,
  twelfth_deviation_five,
  twelfth_deviation_six, 
  twelfth_deviation_seven,
  twelfth_deviation_eight,
  twelfth_deviation_nine,
  twelfth_deviation_ten,
  twelfth_measurement_results_one,
  twelfth_measurement_results_two,
  twelfth_measurement_results_three,
  twelfth_measurement_results_four,
  twelfth_measurement_results_five,
  twelfth_measurement_results_six,
  twelfth_measurement_results_seven,
  twelfth_measurement_results_eight,
  twelfth_measurement_results_nine,
  twelfth_measurement_results_ten,
  twelfth_extended_uncertaintyes_one,
  twelfth_extended_uncertaintyes_two,
  twelfth_extended_uncertaintyes_three,
  twelfth_extended_uncertaintyes_four,
  twelfth_extended_uncertaintyes_five,
  twelfth_extended_uncertaintyes_six,
  twelfth_extended_uncertaintyes_seven,
  twelfth_extended_uncertaintyes_eight,
  twelfth_extended_uncertaintyes_nine,
  twelfth_extended_uncertaintyes_ten,
  twelfth_Illum_references_one,
  twelfth_Illum_references_two,
  twelfth_Illum_references_three,
  twelfth_Illum_references_four,
  twelfth_Illum_references_five,
  twelfth_Illum_references_six,
  twelfth_Illum_references_seven,
  twelfth_Illum_references_eight,
  twelfth_Illum_references_nine,
  twelfth_Illum_references_ten,
}) {

const [Twelfth_deviation_one, setTwelfth_Deviation_one] = useState(null);
const [Twelfth_deviation_two, setTwelfth_Deviation_two] = useState(null);
const [Twelfth_deviation_three, setTwelfth_Deviation_three] = useState(null);
const [Twelfth_deviation_four, setTwelfth_Deviation_four] = useState(null);
const [Twelfth_deviation_five, setTwelfth_Deviation_five] = useState(null);
const [Twelfth_deviation_six, setTwelfth_Deviation_six] = useState(null);
const [Twelfth_deviation_seven, setTwelfth_Deviation_seven] = useState(null);
const [Twelfth_deviation_eight, setTwelfth_Deviation_eight] = useState(null);
const [Twelfth_deviation_nine, setTwelfth_Deviation_nine] = useState(null);
const [Twelfth_deviation_ten, setTwelfth_Deviation_ten] = useState(null);

const one_calkDeviation_twelfth = () => {
  const Twelfth_deviation_one = (((twelfth_measurement_results_one-twelfth_Illum_references_one)/twelfth_Illum_references_one)*100).toFixed(2)
  setTwelfth_Deviation_one(Twelfth_deviation_one);
  }
const one_clearDeviation_twelfth = () => {
  setTwelfth_Deviation_one('');
  };

const two_calkDeviation_twelfth = () => {
  const Twelfth_deviation_two = (((twelfth_measurement_results_two-twelfth_Illum_references_two)/twelfth_Illum_references_two)*100).toFixed(2)
  setTwelfth_Deviation_two(Twelfth_deviation_two);
  }
const two_clearDeviation = () => {
  setTwelfth_Deviation_two('');
  };
const three_calkDeviation_twelfth = () => {
  const Twelfth_deviation_three = (((twelfth_measurement_results_three-twelfth_Illum_references_three)/twelfth_Illum_references_three)*100).toFixed(2)
  setTwelfth_Deviation_three(Twelfth_deviation_three);
  }
const three_clearDeviation = () => {
  setTwelfth_Deviation_three('');
  };
const four_calkDeviation_twelfth = () => {
  const Twelfth_deviation_four = (((twelfth_measurement_results_four-twelfth_Illum_references_four)/twelfth_Illum_references_four)*100).toFixed(2)
  setTwelfth_Deviation_four(Twelfth_deviation_four);
  }
const four_clearDeviation = () => {
  setTwelfth_Deviation_four('');
  };
const five_calkDeviation_twelfth = () => {
  const Twelfth_deviation_five = (((twelfth_measurement_results_five-twelfth_Illum_references_five)/twelfth_Illum_references_five)*100).toFixed(2)
  setTwelfth_Deviation_five(Twelfth_deviation_five);
  }
const five_clearDeviation = () => {
  setTwelfth_Deviation_five('');
  };
const six_calkDeviation_twelfth = () => {
  const Twelfth_deviation_six = (((twelfth_measurement_results_six-twelfth_Illum_references_six)/twelfth_Illum_references_six)*100).toFixed(2)
  setTwelfth_Deviation_six(Twelfth_deviation_six);
  }
const six_clearDeviation = () => {
  setTwelfth_Deviation_six('');
  };
const seven_calkDeviation_twelfth = () => {
  const Twelfth_deviation_seven = (((twelfth_measurement_results_seven-twelfth_Illum_references_seven)/twelfth_Illum_references_seven)*100).toFixed(2)
  setTwelfth_Deviation_seven(Twelfth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setTwelfth_Deviation_seven('');
  };
const eight_calkDeviation_twelfth = () => {
  const Twelfth_deviation_eight = (((twelfth_measurement_results_eight-twelfth_Illum_references_eight)/twelfth_Illum_references_eight)*100).toFixed(2)
  setTwelfth_Deviation_eight(Twelfth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setTwelfth_Deviation_eight('');
  };
const nine_calkDeviation_twelfth = () => {
  const Twelfth_deviation_nine = (((twelfth_measurement_results_nine-twelfth_Illum_references_nine)/twelfth_Illum_references_nine)*100).toFixed(2)
  setTwelfth_Deviation_nine(Twelfth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setTwelfth_Deviation_nine('');
  };
const ten_calkDeviation_twelfth = () => {
  const Twelfth_deviation_ten = (((twelfth_measurement_results_ten-twelfth_Illum_references_ten)/twelfth_Illum_references_ten)*100).toFixed(2)
  setTwelfth_Deviation_ten(Twelfth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setTwelfth_Deviation_ten('');
  };


  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_twelve'
      value={lamp_type.name}
      checked={lamp_types_twelve === lamp_type.name}
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
    name='lamp_stabilityes_twelve'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_twelve ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_twelve'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_twelve === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_one">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_one === "" ? "Избери" 
    : twelfth_Illum_references_one} hidden="hidden">
    {twelfth_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_one} 
    name='twelfth_measurement_results_one' id='twelfth_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_one} 
    name='twelfth_extended_uncertaintyes_one' id='twelfth_extended_uncertaintyes_one' />
    </div>

<div className="form-group">
<p onClick={one_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_one}
   name='twelfth_deviation_one' id='twelfth_deviation_one' />
    <label htmlFor="twelfth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_twelfth} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_two">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_two === "" ? "Избери" 
    : twelfth_Illum_references_two} hidden="hidden">
    {twelfth_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_two} 
    name='twelfth_measurement_results_two' id='twelfth_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_two} 
    name='twelfth_extended_uncertaintyes_two' id='twelfth_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_two}
   name='twelfth_deviation_two' id='twelfth_deviation_two' />
    <label htmlFor="twelfth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_three">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_three === "" ? "Избери" 
    : twelfth_Illum_references_three} hidden="hidden">
    {twelfth_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_three} 
    name='twelfth_measurement_results_three' id='twelfth_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_three} 
    name='twelfth_extended_uncertaintyes_three' id='twelfth_extended_uncertaintyes_three' />
    </div>

<div className="form-group">
<p onClick={three_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_three}
   name='twelfth_deviation_three' id='twelfth_deviation_three' />
    <label htmlFor="twelfth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_four">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_four === "" ? "Избери" 
    : twelfth_Illum_references_four} hidden="hidden">
    {twelfth_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={twelfth_measurement_results_four} 
    name='twelfth_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_four} 
    name='twelfth_extended_uncertaintyes_four'  />
    </div>

<div className="form-group">
<p onClick={four_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_four}
   name='twelfth_deviation_four' id='twelfth_deviation_four' />
    <label htmlFor="twelfth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div>
    <div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_five">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_five === "" ? "Избери" 
    : twelfth_Illum_references_five} hidden="hidden">
    {twelfth_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_five} 
    name='twelfth_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_five} 
    name='twelfth_extended_uncertaintyes_five'  />
    </div>

<div className="form-group">
<p onClick={five_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_five}
   name='twelfth_deviation_five' id='twelfth_deviation_five' />
    <label htmlFor="twelfth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_six">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_six === "" ? "Избери" 
    : twelfth_Illum_references_six} hidden="hidden">
    {twelfth_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_six} 
    name='twelfth_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_six} 
    name='twelfth_extended_uncertaintyes_six'  />
    </div>

<div className="form-group">
<p onClick={six_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_six}
   name='twelfth_deviation_six' id='twelfth_deviation_six' />
    <label htmlFor="twelfth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_seven === "" ? "Избери" 
    : twelfth_Illum_references_seven} hidden="hidden">
    {twelfth_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_seven} 
    name='twelfth_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_seven} 
    name='twelfth_extended_uncertaintyes_seven'  />
    </div>

<div className="form-group">
<p onClick={seven_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_seven}
   name='twelfth_deviation_seven' id='twelfth_deviation_seven' />
    <label htmlFor="twelfth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_eight === "" ? "Избери" 
    : twelfth_Illum_references_eight} hidden="hidden">
    {twelfth_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_eight} 
    name='twelfth_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_eight} 
    name='twelfth_extended_uncertaintyes_eight'  />
    </div>

<div className="form-group">
<p onClick={eight_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_eight}
   name='twelfth_deviation_eight' id='twelfth_deviation_eight' />
    <label htmlFor="twelfth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_nine === "" ? "Избери" 
    : twelfth_Illum_references_nine} hidden="hidden">
    {twelfth_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_nine} 
    name='twelfth_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_nine} 
    name='twelfth_extended_uncertaintyes_nine'  />
    </div>

<div className="form-group">
<p onClick={nine_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_nine}
   name='twelfth_deviation_nine' id='twelfth_deviation_nine' />
    <label htmlFor="twelfth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="twelfth_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='twelfth_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={twelfth_Illum_references_ten === "" ? "Избери" 
    : twelfth_Illum_references_ten} hidden="hidden">
    {twelfth_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twelfth_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_measurement_results_ten} 
    name='twelfth_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="twelfth_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={twelfth_extended_uncertaintyes_ten} 
    name='twelfth_extended_uncertaintyes_ten'  />
    </div>
<div className="form-group">
<p onClick={ten_calkDeviation_twelfth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Twelfth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={twelfth_deviation_ten}
   name='twelfth_deviation_ten' id='twelfth_deviation_ten' />
    <label htmlFor="twelfth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    </div>
    )
}
export default Twelfth