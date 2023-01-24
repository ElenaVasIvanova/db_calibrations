import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'


export const columns_CS_sources = [
      
{
  Header:'Клиент:',
  Footer:'Клиент:',
  accessor:   'client',
},
{
  Header:'Идент. №',
  Footer:'Иден. №',
  accessor: 'identification'
},
{
  Header:'№ на СК/дата',
  Footer:'№ на СК/дата',
  accessor: properties => properties.num_calibration_certificate + ' ' + properties.data_calibration_certificate
},
  {
    Header: 'Източници на калибриране',
    Footer: 'Източници на калибриране',
    disableFilters: true,
    accessor: properties =>
properties.mhl.lamp_types_one
 + ' ' +
properties.lng.lamp_types_two
+ ' ' +
properties.Ll_philips.lamp_types_three
+ ' ' +
properties.A60.lamp_types_four
+ ' ' +
properties.Ultra.lamp_types_five
+ ' ' +
properties.Star.six_lamp_types
+ ' ' +
properties.VT_1864.lamp_types_seven
+ ' ' +
properties.Viva_cool.lamp_types_eight
+ ' ' +
properties.Viva_warm.lamp_types_nine
+ ' ' +
properties.OSRAM_6500.lamp_types_ten
+ ' ' +
properties.Ll_6500.lamp_types_eleven
+ ' ' +
properties.lng_1.lamp_types_twelve
    
  },
{
  Header:'Устройство / Модел',
  Footer:'Устройство/Модел',
  accessor: properties => properties.device + ' ' + properties.type_model
},
{
    Header: 'Дата на въвеждане',
    Footer: 'Дата на въвеждане',
    accessor: 'createdAt',
    disableFilters: true,
    Cell: ({ value }) => {
    return format(new Date(value), 'dd/MM/yyyy')
    }
    

  }

 ]
      