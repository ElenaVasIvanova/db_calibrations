import React from 'react'
function ThirdItem({calibration}) {
	return (
		<div>
		<br />
		<h2>измерване - Parathom classic A60/2700K warm white</h2>	    
		<div className="boxes">
		<div className="note">
		<h3>Тип лампа:</h3>
		<p>{calibration.A60.lamp_types_four}</p>
		<br />
		<hr />
		<h3>Първа точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_one }<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_one}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_one}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_one} %</p>
		<h3>Втора точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_two}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_two}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_two}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_two} %</p>
		<h3>Трета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_three}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_three}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_three}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_three} %</p>
		<h3>Четвърта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_four}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_four}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_four}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_four} %
</p>
		<h3>Пета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_five}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_five}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_five}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_five} %</p>
		</div>
		<div  className="note">
		<h3>Стабилност на лампа:</h3>
		<p>{calibration.A60.lamp_stabilityes_four}</p>
		<br />
		<hr />
		<h3>Шеста точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_six}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_six}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_six}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_six} %</p>
		<h3>Седма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_seven}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_seven}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_seven}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_seven} %</p>
		<h3>Осма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_eight}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_eight}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_eight}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_eight} %</p>
		<h3>Девета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_nine}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_nine}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_nine}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_nine} %</p>
		<h3>Деceта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.A60.fourth_Illum_references_ten}<br />
		Резултат от измерването - {calibration.A60.fourth_measurement_results_ten}<br />
		Разширена неопределеност - {calibration.A60.fourth_extended_uncertaintyes_ten}<br /> Отклонение на уреда - {calibration.A60.fourth_deviation_ten} %</p>
		</div>
		</div>
		</div>
		)
}
export default ThirdItem