import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'

export const columns_meas_mhl_2 = [
  

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
accessor: 'mhl.sixIllum_references_mhl',
disableFilters: true,
},
{
Header: '6и',
accessor: 'mhl.six_measurement_results_mhl',
disableFilters: true,
},
{
Header: '6н',
accessor: 'mhl.six_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '7р',
accessor: 'mhl.sevenIllum_references_mhl',
disableFilters: true,
},
{
Header: '7и',
accessor: 'mhl.seven_measurement_results_mhl',
disableFilters: true,
},
{
Header: '7н',
accessor: 'mhl.seven_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '8р',
accessor: 'mhl.eightIllum_references_mhl',
disableFilters: true,
},
{
Header: '8и',
accessor: 'mhl.eight_measurement_results_mhl',
disableFilters: true,
},
{
Header: '8н',
accessor: 'mhl.eight_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '9р',
accessor: 'mhl.nineIllum_references_mhl',
disableFilters: true,
},
{
Header: '9и',
accessor: 'mhl.nine_measurement_results_mhl',
disableFilters: true,
},
{
Header: '9н',
accessor: 'mhl.nine_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '10р',
accessor: 'mhl.tenIllum_references_mhl',
disableFilters: true,
},
{
Header: '10и',
accessor: 'mhl.ten_measurement_results_mhl',
disableFilters: true,
},
{
Header: '10н',
accessor: 'mhl.ten_extended_uncertaintyes_mhl',
disableFilters: true,
show: false,
}

]
