import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Seventh({onChange,
  lamp_types_seven,
  lamp_stabilityes_seven,
  seventh_deviation_one, 
  seventh_deviation_two, 
  seventh_deviation_three,
  seventh_deviation_four,
  seventh_deviation_five,
  seventh_deviation_six, 
  seventh_deviation_seven,
  seventh_deviation_eight,
  seventh_deviation_nine,
  seventh_deviation_ten,
  seventh_measurement_results_one,
  seventh_measurement_results_two,
  seventh_measurement_results_three,
  seventh_measurement_results_four,
  seventh_measurement_results_five,
  seventh_measurement_results_six,
  seventh_measurement_results_seven,
  seventh_measurement_results_eight,
  seventh_measurement_results_nine,
  seventh_measurement_results_ten,
  seventh_extended_uncertaintyes_one,
  seventh_extended_uncertaintyes_two,
  seventh_extended_uncertaintyes_three,
  seventh_extended_uncertaintyes_four,
  seventh_extended_uncertaintyes_five,
  seventh_extended_uncertaintyes_six,
  seventh_extended_uncertaintyes_seven,
  seventh_extended_uncertaintyes_eight,
  seventh_extended_uncertaintyes_nine,
  seventh_extended_uncertaintyes_ten,
  seventh_Illum_references_one,
  seventh_Illum_references_two,
  seventh_Illum_references_three,
  seventh_Illum_references_four,
  seventh_Illum_references_five,
  seventh_Illum_references_six,
  seventh_Illum_references_seven,
  seventh_Illum_references_eight,
  seventh_Illum_references_nine,
  seventh_Illum_references_ten,}) {

const [Seventh_deviation_one, setSeventh_Deviation_one] = useState(null);
const [Seventh_deviation_two, setSeventh_Deviation_two] = useState(null);
const [Seventh_deviation_three, setSeventh_Deviation_three] = useState(null);
const [Seventh_deviation_four, setSeventh_Deviation_four] = useState(null);
const [Seventh_deviation_five, setSeventh_Deviation_five] = useState(null);
const [Seventh_deviation_six, setSeventh_Deviation_six] = useState(null);
const [Seventh_deviation_seven, setSeventh_Deviation_seven] = useState(null);
const [Seventh_deviation_eight, setSeventh_Deviation_eight] = useState(null);
const [Seventh_deviation_nine, setSeventh_Deviation_nine] = useState(null);
const [Seventh_deviation_ten, setSeventh_Deviation_ten] = useState(null);

const one_calkDeviation_seventh = () => {
  const Seventh_deviation_one = (((seventh_measurement_results_one-seventh_Illum_references_one)/seventh_Illum_references_one)*100).toFixed(2)
  setSeventh_Deviation_one(Seventh_deviation_one);
  }
const one_clearDeviation_seventh = () => {
  setSeventh_Deviation_one('');
  };

const two_calkDeviation_seventh = () => {
  const Seventh_deviation_two = (((seventh_measurement_results_two-seventh_Illum_references_two)/seventh_Illum_references_two)*100).toFixed(2)
  setSeventh_Deviation_two(Seventh_deviation_two);
  }
const two_clearDeviation = () => {
  setSeventh_Deviation_two('');
  };
const three_calkDeviation_seventh = () => {
  const Seventh_deviation_three = (((seventh_measurement_results_three-seventh_Illum_references_three)/seventh_Illum_references_three)*100).toFixed(2)
  setSeventh_Deviation_three(Seventh_deviation_three);
  }
const three_clearDeviation = () => {
  setSeventh_Deviation_three('');
  };
const four_calkDeviation_seventh = () => {
  const Seventh_deviation_four = (((seventh_measurement_results_four-seventh_Illum_references_four)/seventh_Illum_references_four)*100).toFixed(2)
  setSeventh_Deviation_four(Seventh_deviation_four);
  }
const four_clearDeviation = () => {
  setSeventh_Deviation_four('');
  };
const five_calkDeviation_seventh = () => {
  const Seventh_deviation_five = (((seventh_measurement_results_five-seventh_Illum_references_five)/seventh_Illum_references_five)*100).toFixed(2)
  setSeventh_Deviation_five(Seventh_deviation_five);
  }
const five_clearDeviation = () => {
  setSeventh_Deviation_five('');
  };
const six_calkDeviation_seventh = () => {
  const Seventh_deviation_six = (((seventh_measurement_results_six-seventh_Illum_references_six)/seventh_Illum_references_six)*100).toFixed(2)
  setSeventh_Deviation_six(Seventh_deviation_six);
  }
const six_clearDeviation = () => {
  setSeventh_Deviation_six('');
  };
const seven_calkDeviation_seventh = () => {
  const Seventh_deviation_seven = (((seventh_measurement_results_seven-seventh_Illum_references_seven)/seventh_Illum_references_seven)*100).toFixed(2)
  setSeventh_Deviation_seven(Seventh_deviation_seven);
  }
const seven_clearDeviation = () => {
  setSeventh_Deviation_seven('');
  };
const eight_calkDeviation_seventh = () => {
  const Seventh_deviation_eight = (((seventh_measurement_results_eight-seventh_Illum_references_eight)/seventh_Illum_references_eight)*100).toFixed(2)
  setSeventh_Deviation_eight(Seventh_deviation_eight);
  }
const eight_clearDeviation = () => {
  setSeventh_Deviation_eight('');
  };
const nine_calkDeviation_seventh = () => {
  const Seventh_deviation_nine = (((seventh_measurement_results_nine-seventh_Illum_references_nine)/seventh_Illum_references_nine)*100).toFixed(2)
  setSeventh_Deviation_nine(Seventh_deviation_nine);
  }
const nine_clearDeviation = () => {
  setSeventh_Deviation_nine('');
  };
const ten_calkDeviation_seventh = () => {
  const Seventh_deviation_ten = (((seventh_measurement_results_ten-seventh_Illum_references_ten)/seventh_Illum_references_ten)*100).toFixed(2)
  setSeventh_Deviation_ten(Seventh_deviation_ten);
  };
const ten_clearDeviation = () => {
  setSeventh_Deviation_ten('');
  };

  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_seven'
      value={lamp_type.name}
      checked={lamp_types_seven === lamp_type.name}
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
    name='lamp_stabilityes_seven'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_seven ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_seven'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_seven === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_one">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_one === "" ? "Избери" 
    : seventh_Illum_references_one} hidden="hidden">
    {seventh_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_one} 
    name='seventh_measurement_results_one' id='seventh_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_one} 
    name='seventh_extended_uncertaintyes_one' id='seventh_extended_uncertaintyes_one' />
    </div>
    <div className="form-group">
<p onClick={one_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_one}
   name='seventh_deviation_one' id='seventh_deviation_one' />
    <label htmlFor="seventh_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_seventh} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_two">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_two === "" ? "Избери" 
    : seventh_Illum_references_two} hidden="hidden">
    {seventh_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_two} 
    name='seventh_measurement_results_two' id='seventh_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_two} 
    name='seventh_extended_uncertaintyes_two' id='seventh_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_two}
   name='seventh_deviation_two' id='seventh_deviation_two' />
    <label htmlFor="seventh_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_three">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_three === "" ? "Избери" 
    : seventh_Illum_references_three} hidden="hidden">
    {seventh_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_three} 
    name='seventh_measurement_results_three' id='seventh_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_three} 
    name='seventh_extended_uncertaintyes_three' id='seventh_extended_uncertaintyes_three' />
    </div>

<div className="form-group">
<p onClick={three_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_three}
   name='seventh_deviation_three' id='seventh_deviation_three' />
    <label htmlFor="seventh_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_four">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_four === "" ? "Избери" 
    : seventh_Illum_references_four} hidden="hidden">
    {seventh_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={seventh_measurement_results_four} 
    name='seventh_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_four} 
    name='seventh_extended_uncertaintyes_four'  />
    </div>
 <div className="form-group">
<p onClick={four_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_four}
   name='seventh_deviation_four' id='seventh_deviation_four' />
    <label htmlFor="seventh_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_five">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_five === "" ? "Избери" 
    : seventh_Illum_references_five} hidden="hidden">
    {seventh_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_five} 
    name='seventh_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_five} 
    name='seventh_extended_uncertaintyes_five'  />
    </div>

<div className="form-group">
<p onClick={five_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_five}
   name='seventh_deviation_five' id='seventh_deviation_five' />
    <label htmlFor="seventh_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_six">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_six === "" ? "Избери" 
    : seventh_Illum_references_six} hidden="hidden">
    {seventh_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_six} 
    name='seventh_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_six} 
    name='seventh_extended_uncertaintyes_six'  />
    </div>
<div className="form-group">
<p onClick={six_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_six}
   name='seventh_deviation_six' id='seventh_deviation_six' />
    <label htmlFor="seventh_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_seven === "" ? "Избери" 
    : seventh_Illum_references_seven} hidden="hidden">
    {seventh_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_seven} 
    name='seventh_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_seven} 
    name='seventh_extended_uncertaintyes_seven'  />
    </div>
<div className="form-group">
<p onClick={seven_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_seven}
   name='seventh_deviation_seven' id='seventh_deviation_seven' />
    <label htmlFor="seventh_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_eight === "" ? "Избери" 
    : seventh_Illum_references_eight} hidden="hidden">
    {seventh_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_eight} 
    name='seventh_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_eight} 
    name='seventh_extended_uncertaintyes_eight'  />
    </div>
<div className="form-group">
<p onClick={eight_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_eight}
   name='seventh_deviation_eight' id='seventh_deviation_eight' />
    <label htmlFor="seventh_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_nine === "" ? "Избери" 
    : seventh_Illum_references_nine} hidden="hidden">
    {seventh_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_nine} 
    name='seventh_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_nine} 
    name='seventh_extended_uncertaintyes_nine'  />
    </div>

<div className="form-group">
<p onClick={nine_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_nine}
   name='seventh_deviation_nine' id='seventh_deviation_nine' />
    <label htmlFor="seventh_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="seventh_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='seventh_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={seventh_Illum_references_ten === "" ? "Избери" 
    : seventh_Illum_references_ten} hidden="hidden">
    {seventh_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={seventh_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seventh_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_measurement_results_ten} 
    name='seventh_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="seventh_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seventh_extended_uncertaintyes_ten} 
    name='seventh_extended_uncertaintyes_ten'  />
    </div>

<div className="form-group">
<p onClick={ten_calkDeviation_seventh} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Seventh_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={seventh_deviation_ten}
   name='seventh_deviation_ten' id='seventh_deviation_ten' />
    <label htmlFor="seventh_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    </div>
    )
}
export default Seventh