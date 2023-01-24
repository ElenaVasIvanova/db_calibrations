import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_Star = [

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
accessor: 'Star.oneIllum_references_sixth',
disableFilters: true,
},
{
Header: '1и',
accessor: 'Star.one_measurement_results_sixth',
disableFilters: true,
},
{
Header: '1н',
accessor: 'Star.one_extended_uncertaintyes_sixth',
disableFilters: true,
},


{
Header: '2р',
accessor: 'Star.twoIllum_references_sixth',
disableFilters: true,
},
{
Header: '2и',
accessor: 'Star.two_measurement_results_sixth',
disableFilters: true,
},
{
Header: '2н',
accessor: 'Star.two_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '3р',
accessor: 'Star.threeIllum_references_sixth',
disableFilters: true,

},
{
Header: '3и',
accessor: 'Star.three_measurement_results_sixth',
disableFilters: true,
},
{
Header: '3н',
accessor: 'Star.three_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '4р',
accessor: 'Star.fourIllum_references_sixth',
disableFilters: true,
},
{
Header: '4и',
accessor: 'Star.four_measurement_results_sixth',
disableFilters: true,
},
{
Header: '4н',
accessor: 'Star.four_extended_uncertaintyes_sixth',
disableFilters: true,
},
{
Header: '5р',
accessor: 'Star.fiveIllum_references_sixth',
disableFilters: true,
},
{
Header: '5и',
accessor: 'Star.five_measurement_results_sixth',
disableFilters: true,
},
{
Header: '5н',
accessor: 'Star.five_extended_uncertaintyes_sixth',
disableFilters: true,
},


]



