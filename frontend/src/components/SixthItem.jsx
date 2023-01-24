import React from 'react'
function SixthItem({calibration}) {
	return (
		<div>
		<br />
		<h2>измерване - Star classic А25/3000K</h2>	    
		<div className="boxes">
		<div className="note">
		<h3>Тип лампа:</h3>
		<p>{calibration.Star.lamp_types_six}</p>
		<br />
		<hr />
		<h3>Първа точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.oneIllum_references_sixth }<br />
		Резултат от измерването - {calibration.Star.one_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.one_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_one} %</p>
		<h3>Втора точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.twoIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.two_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.two_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_two} %</p>
		<h3>Трета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.threeIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.three_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.three_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_three} %</p>
		<h3>Четвърта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.fourIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.four_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.four_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_four} %
</p>
		<h3>Пета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.fiveIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.five_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.five_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_five} %</p>
		</div>
		<div  className="note">
		<h3>Стабилност на лампа:</h3>
		<p>{calibration.Star.lamp_stabilityes_six}</p>
		<br />
		<hr />
		<h3>Шеста точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.sixIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.six_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.six_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_six} %
</p>
		<h3>Седма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.sevenIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.seven_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.seven_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_seven} %
</p>
		<h3>Осма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.eightIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.eight_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.eight_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_eight} %
</p>
		<h3>Девета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.nineIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.nine_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.nine_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_nine} %
</p>
		<h3>Деceта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {calibration.Star.tenIllum_references_sixth}<br />
		Резултат от измерването - {calibration.Star.ten_measurement_results_sixth}<br />
		Разширена неопределеност - {calibration.Star.ten_extended_uncertaintyes_sixth}<br /> Отклонение на уреда - {calibration.Star.sixth_deviation_ten} %
</p>
		</div>
		</div>
		</div>
		)
}
export default SixthItem