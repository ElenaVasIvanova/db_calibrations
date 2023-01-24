import React from 'react'
function SecondItem({calibration}) {
	return (
		<div>
		<br />
		<div className="boxes">
		<div  className="note">
		<h3>Стойност на тока mA:</h3>
		<p >{calibration.lng.electricity_two}</p>
		</div>
		<div  className="note">
		<h3>Стойност на напрежението V:</h3>
		<p >{calibration.lng.voltage_two}</p>
		</div>
		</div>
		<h2>Лампа с нажежаема жичка - измерване</h2>	    
		<div className="boxes">
		<div className="note">
		<h3>Тип лампа:</h3>
		<p>{calibration.lng.lamp_types_two}</p>
		<br />
		<hr />
		<h3>Първа точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_one_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_one_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_one_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_one} %</p>
		<h3>Втора точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_two_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_two_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_two_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_two} %</p>
		<h3>Трета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_three_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_three_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_three_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_three} %</p>
		<h3>Четвърта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_four_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_four_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_four_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_four} %
</p>
		<h3>Пета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_five_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_five_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_five_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_five} %</p>
		</div>
		<div  className="note">
		<h3>Стабилност на лампа:</h3>
		<p>{calibration.lng.lamp_stabilityes_two}</p>
		<br />
		<hr />
		<h3>Шеста точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_six_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_six_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_six_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_six} %</p>
		<h3>Седма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_seven_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_seven_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_seven_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_seven} %</p>
		<h3>Осма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_eight_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_eight_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_eight_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_eight} %</p>
		<h3>Девета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_nine_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_nine_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_nine_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_nine} %</p>
		<h3>Деceта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.lng.sec_Illum_references_ten_lng}<br />
		Резултат от измерването - {calibration.lng.sec_measurement_results_ten_lng}<br />
		Разширена неопределеност - {calibration.lng.sec_extended_uncertaintyes_ten_lng}<br /> Отклонение на уреда - {calibration.lng.lng_deviation_ten} %</p>
		
		</div>
		</div>
		</div>
		)
}
export default SecondItem