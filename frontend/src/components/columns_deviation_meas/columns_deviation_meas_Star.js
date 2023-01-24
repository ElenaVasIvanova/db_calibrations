import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_deviation_meas_Star = [

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
Header: '1%',
accessor: 'Star.sixth_deviation_one',
disableFilters: true,
},
{
Header: '2р',
accessor: 'Star.twoIllum_references_sixth',
disableFilters: true,
},
{
Header: '2%',
accessor: 'Star.sixth_deviation_two',
disableFilters: true,
},
{
Header: '3р',
accessor: 'Star.threeIllum_references_sixth',
disableFilters: true,

},
{
Header: '3%',
accessor: 'Star.sixth_deviation_three',
disableFilters: true,
},
{
Header: '4р',
accessor: 'Star.fourIllum_references_sixth',
disableFilters: true,
},
{
Header: '4%',
accessor: 'Star.sixth_deviation_four',
disableFilters: true,
},
{
Header: '5р',
accessor: 'Star.fiveIllum_references_sixth',
disableFilters: true,
},
{
Header: '5%',
accessor: 'Star.sixth_deviation_five',
disableFilters: true,
},
{
Header: '6р',
accessor: 'Star.sixIllum_references_sixth',
disableFilters: true,
},
{
Header: '6%',
accessor: 'Star.sixth_deviation_six',
disableFilters: true,
},
{
Header: '7р',
accessor: 'Star.sevenIllum_references_sixth',
disableFilters: true,
},
{
Header: '7%',
accessor: 'Star.sixth_deviation_seven',
disableFilters: true,
},
{
Header: '8р',
accessor: 'Star.eightIllum_references_sixth',
disableFilters: true,
},
{
Header: '8%',
accessor: 'Star.sixth_deviation_eight',
disableFilters: true,
},
{
Header: '9р',
accessor: 'Star.nineIllum_references_sixth',
disableFilters: true,
},
{
Header: '9%',
accessor: 'Star.sixth_deviation_nine',
disableFilters: true,
},
{
Header: '10р',
accessor: 'Star.tenIllum_references_sixth',
disableFilters: true,
},
{
Header: '10%',
accessor: 'Star.sixth_deviation_ten',
disableFilters: true,
}

]



