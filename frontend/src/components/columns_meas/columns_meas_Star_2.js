import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'

export const columns_meas_Star_2 = [
  

 {
Header:'СК и дата',
Footer:'СК и дата',
disableFilters: true,
accessor: properties =>
properties.num_calibration_certificate
+ ' ' +
properties.data_calibration_certificate,

},
 {
Header: '6р',
accessor: 'Star.sixIllum_references_sixth',
disableFilters: true,
},
{
Header: '6и',
accessor: 'Star.six_measurement_results_sixth',
disableFilters: true,
},
{
Header: '6н',
accessor: 'Star.six_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '7р',
accessor: 'Star.sevenIllum_references_sixth',
disableFilters: true,
},
{
Header: '7и',
accessor: 'Star.seven_measurement_results_sixth',
disableFilters: true,
},
{
Header: '7н',
accessor: 'Star.seven_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '8р',
accessor: 'Star.eightIllum_references_sixth',
disableFilters: true,
},
{
Header: '8и',
accessor: 'Star.eight_measurement_results_sixth',
disableFilters: true,
},
{
Header: '8н',
accessor: 'Star.eight_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '9р',
accessor: 'Star.nineIllum_references_sixth',
disableFilters: true,
},
{
Header: '9и',
accessor: 'Star.nine_measurement_results_sixth',
disableFilters: true,
},
{
Header: '9н',
accessor: 'Star.nine_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '10р',
accessor: 'Star.tenIllum_references_sixth',
disableFilters: true,
},
{
Header: '10и',
accessor: 'Star.ten_measurement_results_sixth',
disableFilters: true,
},
{
Header: '10н',
accessor: 'Star.ten_extended_uncertaintyes_sixth',
disableFilters: true,
show: false,
}

]
