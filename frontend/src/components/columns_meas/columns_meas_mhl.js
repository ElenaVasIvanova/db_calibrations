import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_mhl = [

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
Header: '1р',
accessor: 'mhl.oneIllum_references_mhl',
disableFilters: true,
},
{
Header: '1и',
accessor: 'mhl.one_measurement_results_mhl',
disableFilters: true,
},
{
Header: '1н',
accessor: 'mhl.one_extended_uncertaintyes_mhl',
disableFilters: true,
},


{
Header: '2р',
accessor: 'mhl.twoIllum_references_mhl',
disableFilters: true,
},
{
Header: '2и',
accessor: 'mhl.two_measurement_results_mhl',
disableFilters: true,
},
{
Header: '2н',
accessor: 'mhl.two_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '3р',
accessor: 'mhl.threeIllum_references_mhl',
disableFilters: true,

},
{
Header: '3и',
accessor: 'mhl.three_measurement_results_mhl',
disableFilters: true,
},
{
Header: '3н',
accessor: 'mhl.three_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '4р',
accessor: 'mhl.fourIllum_references_mhl',
disableFilters: true,
},
{
Header: '4и',
accessor: 'mhl.four_measurement_results_mhl',
disableFilters: true,
},
{
Header: '4н',
accessor: 'mhl.four_extended_uncertaintyes_mhl',
disableFilters: true,
},
{
Header: '5р',
accessor: 'mhl.fiveIllum_references_mhl',
disableFilters: true,
},
{
Header: '5и',
accessor: 'mhl.five_measurement_results_mhl',
disableFilters: true,
},
{
Header: '5н',
accessor: 'mhl.five_extended_uncertaintyes_mhl',
disableFilters: true,
},


]



