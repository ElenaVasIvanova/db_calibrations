import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_VT_1864 = [
  
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
accessor: 'VT_1864.seventh_Illum_references_one',
disableFilters: true,
},
{
Header: '1и',
accessor: 'VT_1864.seventh_measurement_results_one',
disableFilters: true,
},
{
Header: '1н',
accessor: 'VT_1864.seventh_extended_uncertaintyes_one',
disableFilters: true,
},


{
Header: '2р',
accessor: 'VT_1864.seventh_Illum_references_two',
disableFilters: true,
},
{
Header: '2и',
accessor: 'VT_1864.seventh_measurement_results_two',
disableFilters: true,
},
{
Header: '2н',
accessor: 'VT_1864.seventh_extended_uncertaintyes_two',
disableFilters: true,
},
{
Header: '3р',
accessor: 'VT_1864.seventh_Illum_references_three',
disableFilters: true,

},
{
Header: '3и',
accessor: 'VT_1864.seventh_measurement_results_three',
disableFilters: true,
},
{
Header: '3н',
accessor: 'VT_1864.seventh_extended_uncertaintyes_three',
disableFilters: true,
},
{
Header: '4р',
accessor: 'VT_1864.seventh_Illum_references_four',
disableFilters: true,
},
{
Header: '4и',
accessor: 'VT_1864.seventh_measurement_results_four',
disableFilters: true,
},
{
Header: '4н',
accessor: 'VT_1864.seventh_extended_uncertaintyes_four',
disableFilters: true,
},
{
Header: '5р',
accessor: 'VT_1864.seventh_Illum_references_five',
disableFilters: true,
},
{
Header: '5и',
accessor: 'VT_1864.seventh_measurement_results_five',
disableFilters: true,
},
{
Header: '5н',
accessor: 'VT_1864.seventh_extended_uncertaintyes_five',
disableFilters: true,
}



]




  

