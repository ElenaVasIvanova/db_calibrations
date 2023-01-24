import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Eleventh({onChange,
  lamp_types_eleven,
  lamp_stabilityes_eleven,
  eleventh_deviation_one, 
  eleventh_deviation_two, 
  eleventh_deviation_three,
  eleventh_deviation_four,
  eleventh_deviation_five,
  eleventh_deviation_six, 
  eleventh_deviation_seven,
  eleventh_deviation_eight,
  eleventh_deviation_nine,
  eleventh_deviation_ten,
  eleventh_measurement_results_one,
  eleventh_measurement_results_two,
  eleventh_measurement_results_three,
  eleventh_measurement_results_four,
  eleventh_measurement_results_five,
  eleventh_measurement_results_six,
  eleventh_measurement_results_seven,
  eleventh_measurement_results_eight,
  eleventh_measurement_results_nine,
  eleventh_measurement_results_ten,
  eleventh_extended_uncertaintyes_one,
  eleventh_extended_uncertaintyes_two,
  eleventh_extended_uncertaintyes_three,
  eleventh_extended_uncertaintyes_four,
  eleventh_extended_uncertaintyes_five,
  eleventh_extended_uncertaintyes_six,
  eleventh_extended_uncertaintyes_seven,
  eleventh_extended_uncertaintyes_eight,
  eleventh_extended_uncertaintyes_nine,
  eleventh_extended_uncertaintyes_ten,
  eleventh_Illum_references_one,
  eleventh_Illum_references_two,
  eleventh_Illum_references_three,
  eleventh_Illum_references_four,
  eleventh_Illum_references_five,
  eleventh_Illum_references_six,
  eleventh_Illum_references_seven,
  eleventh_Illum_references_eight,
  eleventh_Illum_references_nine,
  eleventh_Illum_references_ten,
}) {

const [Eleventh_deviation_one, setEleventh_Deviation_one] = useState(null);
const [Eleventh_deviation_two, setEleventh_Deviation_two] = useState(null);
const [Eleventh_deviation_three, setEleventh_Deviation_three] = useState(null);
const [Eleventh_deviation_four, setEleventh_Deviation_four] = useState(null);
const [Eleventh_deviation_five, setEleventh_Deviation_five] = useState(null);
const [Eleventh_deviation_six, setEleventh_Deviation_six] = useState(null);
const [Eleventh_deviation_seven, setEleventh_Deviation_seven] = useState(null);
const [Eleventh_deviation_eight, setEleventh_Deviation_eight] = useState(null);
const [Eleventh_deviation_nine, setEleventh_Deviation_nine] = useState(null);
const [Eleventh_deviation_ten, setEleventh_Deviation_ten] = useState(null);

const one_calkDeviation_eleventh = () => {
  const Eleventh_deviation_one = (((eleventh_measurement_results_one-eleventh_Illum_references_one)/eleventh_Illum_references_one)*100).toFixed(2)
  setEleventh_Deviation_one(Eleventh_deviation_one);
  }
const one_clearDeviation_eleventh = () => {
  setEleventh_Deviation_one('');
  };

const two_calkDeviation_eleventh = () => {
  const Eleventh_deviation_two = (((eleventh_measurement_results_two-eleventh_Illum_references_two)/eleventh_Illum_references_two)*100).toFixed(2)
  setEleventh_Deviation_two(Eleventh_deviation_two);
  }
const two_clearDeviation = () => {
  setEleventh_Deviation_two('');
  };
const three_calkDeviation_eleventh = () => {
  const Eleventh_deviation_three = (((eleventh_measurement_results_three-eleventh_Illum_references_three)/eleventh_Illum_references_three)*100).toFixed(2)
  setEleventh_Deviation_three(Eleventh_deviation_three);
  }
const three_clearDeviation = () => {
  setEleventh_Deviation_three('');
  };
const four_calkDeviation_eleventh = () => {
  const Eleventh_deviation_four = (((eleventh_measurement_results_four-eleventh_Illum_references_four)/eleventh_Illum_references_four)*100).toFixed(2)
  setEleventh_Deviation_four(Eleventh_deviation_four);
  }
const four_clearDeviation = () => {
  setEleventh_Deviation_four('');
  };
const five_calkDeviation_eleventh = () => {
  const Eleventh_deviation_five = (((eleventh_measurement_results_five-eleventh_Illum_references_five)/eleventh_Illum_references_five)*100).toFixed(2)
  setEleventh_Deviation_five(Eleventh_deviation_five);
  }
const five_clearDeviation = () => {
  setEleventh_Deviation_five('');
  };
const six_calkDeviation_eleventh = () => {
  const Eleventh_deviation_six = (((eleventh_measurement_results_six-eleventh_Illum_references_six)/eleventh_Illum_references_six)*100).toFixed(2)
  setEleventh_Deviation_six(Eleventh_deviation_six);
  }
const six_clearDeviation = () => {
  setEleventh_Deviation_six('');
  };
const seven_calkDeviation_eleventh = () => {
  const Eleventh_deviation_seven = (((eleventh_measurement_results_seven-eleventh_Illum_references_seven)/eleventh_Illum_references_seven)*100).toFixed(2)
  setEleventh_Deviation_seven(Eleventh_deviation_seven);
  }
const seven_clearDeviation = () => {
  setEleventh_Deviation_seven('');
  };
const eight_calkDeviation_eleventh = () => {
  const Eleventh_deviation_eight = (((eleventh_measurement_results_eight-eleventh_Illum_references_eight)/eleventh_Illum_references_eight)*100).toFixed(2)
  setEleventh_Deviation_eight(Eleventh_deviation_eight);
  }
const eight_clearDeviation = () => {
  setEleventh_Deviation_eight('');
  };
const nine_calkDeviation_eleventh = () => {
  const Eleventh_deviation_nine = (((eleventh_measurement_results_nine-eleventh_Illum_references_nine)/eleventh_Illum_references_nine)*100).toFixed(2)
  setEleventh_Deviation_nine(Eleventh_deviation_nine);
  }
const nine_clearDeviation = () => {
  setEleventh_Deviation_nine('');
  };
const ten_calkDeviation_eleventh = () => {
  const Eleventh_deviation_ten = (((eleventh_measurement_results_ten-eleventh_Illum_references_ten)/eleventh_Illum_references_ten)*100).toFixed(2)
  setEleventh_Deviation_ten(Eleventh_deviation_ten);
  };
const ten_clearDeviation = () => {
  setEleventh_Deviation_ten('');
  };

  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_eleven'
      value={lamp_type.name}
      checked={lamp_types_eleven === lamp_type.name}
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
    name='lamp_stabilityes_eleven'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_eleven ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_eleven'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_eleven === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_one">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_one === "" ? "Избери" 
    : eleventh_Illum_references_one} hidden="hidden">
    {eleventh_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_one} 
    name='eleventh_measurement_results_one' id='eleventh_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_one} 
    name='eleventh_extended_uncertaintyes_one' id='eleventh_extended_uncertaintyes_one' />
    </div>

 <div className="form-group">
<p onClick={one_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_one}
   name='eleventh_deviation_one' id='eleventh_deviation_one' />
    <label htmlFor="eleventh_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_eleventh} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_two">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_two === "" ? "Избери" 
    : eleventh_Illum_references_two} hidden="hidden">
    {eleventh_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_two} 
    name='eleventh_measurement_results_two' id='eleventh_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_two} 
    name='eleventh_extended_uncertaintyes_two' id='eleventh_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_two}
   name='eleventh_deviation_two' id='eleventh_deviation_two' />
    <label htmlFor="eleventh_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_three">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_three === "" ? "Избери" 
    : eleventh_Illum_references_three} hidden="hidden">
    {eleventh_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_three} 
    name='eleventh_measurement_results_three' id='eleventh_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_three} 
    name='eleventh_extended_uncertaintyes_three' id='eleventh_extended_uncertaintyes_three' />
    </div>

<div className="form-group">
<p onClick={three_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_three}
   name='eleventh_deviation_three' id='eleventh_deviation_three' />
    <label htmlFor="eleventh_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_four">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_four === "" ? "Избери" 
    : eleventh_Illum_references_four} hidden="hidden">
    {eleventh_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={eleventh_measurement_results_four} 
    name='eleventh_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_four} 
    name='eleventh_extended_uncertaintyes_four'  />
    </div>


<div className="form-group">
<p onClick={four_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_four}
   name='eleventh_deviation_four' id='eleventh_deviation_four' />
    <label htmlFor="eleventh_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div>
    <div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_five">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_five === "" ? "Избери" 
    : eleventh_Illum_references_five} hidden="hidden">
    {eleventh_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_five} 
    name='eleventh_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_five} 
    name='eleventh_extended_uncertaintyes_five'  />
    </div>


<div className="form-group">
<p onClick={five_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_five}
   name='eleventh_deviation_five' id='eleventh_deviation_five' />
    <label htmlFor="eleventh_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>




    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_six">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_six === "" ? "Избери" 
    : eleventh_Illum_references_six} hidden="hidden">
    {eleventh_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_six} 
    name='eleventh_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_six} 
    name='eleventh_extended_uncertaintyes_six'  />
    </div>

<div className="form-group">
<p onClick={six_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_six}
   name='eleventh_deviation_six' id='eleventh_deviation_six' />
    <label htmlFor="eleventh_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_seven === "" ? "Избери" 
    : eleventh_Illum_references_seven} hidden="hidden">
    {eleventh_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_seven} 
    name='eleventh_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_seven} 
    name='eleventh_extended_uncertaintyes_seven'  />
    </div>

    <div className="form-group">
<p onClick={seven_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_seven}
   name='eleventh_deviation_seven' id='eleventh_deviation_seven' />
    <label htmlFor="eleventh_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_eight === "" ? "Избери" 
    : eleventh_Illum_references_eight} hidden="hidden">
    {eleventh_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_eight} 
    name='eleventh_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_eight} 
    name='eleventh_extended_uncertaintyes_eight'  />
    </div>

    <div className="form-group">
<p onClick={eight_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_eight}
   name='eleventh_deviation_eight' id='eleventh_deviation_eight' />
    <label htmlFor="eleventh_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_nine === "" ? "Избери" 
    : eleventh_Illum_references_nine} hidden="hidden">
    {eleventh_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_nine} 
    name='eleventh_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_nine} 
    name='eleventh_extended_uncertaintyes_nine'  />
    </div>

<div className="form-group">
<p onClick={nine_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_nine}
   name='eleventh_deviation_nine' id='eleventh_deviation_nine' />
    <label htmlFor="eleventh_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eleventh_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='eleventh_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={eleventh_Illum_references_ten === "" ? "Избери" 
    : eleventh_Illum_references_ten} hidden="hidden">
    {eleventh_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eleventh_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_measurement_results_ten} 
    name='eleventh_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="eleventh_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eleventh_extended_uncertaintyes_ten} 
    name='eleventh_extended_uncertaintyes_ten'  />
    </div>
<div className="form-group">
<p onClick={ten_calkDeviation_eleventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Eleventh_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={eleventh_deviation_ten}
   name='eleventh_deviation_ten' id='eleventh_deviation_ten' />
    <label htmlFor="eleventh_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    </div>
    )
}
export default Eleventh