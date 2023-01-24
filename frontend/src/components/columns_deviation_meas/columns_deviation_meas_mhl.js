import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_deviation_meas_mhl = [

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
Header: '1%',
accessor: 'mhl.mhl_deviation_one',
disableFilters: true,
},
{
Header: '2р',
accessor: 'mhl.twoIllum_references_mhl',
disableFilters: true,
},
{
Header: '2%',
accessor: 'mhl.mhl_deviation_two',
disableFilters: true,
},

{
Header: '3р',
accessor: 'mhl.threeIllum_references_mhl',
disableFilters: true,

},
{
Header: '3%',
accessor: 'mhl.mhl_deviation_three',
disableFilters: true,
},

{
Header: '4р',
accessor: 'mhl.fourIllum_references_mhl',
disableFilters: true,
},

{
Header: '4%',
accessor: 'mhl.mhl_deviation_four',
disableFilters: true,
},
{
Header: '5р',
accessor: 'mhl.fiveIllum_references_mhl',
disableFilters: true,
},
{
Header: '5%',
accessor: 'mhl.mhl_deviation_five',
disableFilters: true,
},
{
Header: '6р',
accessor: 'mhl.sixIllum_references_mhl',
disableFilters: true,
},
{
Header: '6%',
accessor: 'mhl.mhl_deviation_six', 
disableFilters: true,
},
{
Header: '7р',
accessor: 'mhl.sevenIllum_references_mhl',
disableFilters: true,
},
{
Header: '7%',
accessor: 'mhl.mhl_deviation_seven',
disableFilters: true,
},
{
Header: '8р',
accessor: 'mhl.eightIllum_references_mhl',
disableFilters: true,
},
{
Header: '8%',
accessor: 'mhl.mhl_deviation_eight',
disableFilters: true,
},
{
Header: '9р',
accessor: 'mhl.nineIllum_references_mhl',
disableFilters: true,
},
{
Header: '9%',
accessor: 'mhl.mhl_deviation_nine',
disableFilters: true,
},
{
Header: '10р',
accessor: 'mhl.tenIllum_references_mhl',
disableFilters: true,
},
{
Header: '10%',
accessor: 'mhl.mhl_deviation_ten',
disableFilters: true,
}




]



