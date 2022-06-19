import React from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
  list: Item[];
}

export const TableArea = ({ list }: Props) => {
  return (
        <C.table>
            <thead>
                <tr>
                    <C.tableHeadColumn width={100}>Data</C.tableHeadColumn>
                    <C.tableHeadColumn width={130}>Categoria</C.tableHeadColumn>
                    <C.tableHeadColumn>Título</C.tableHeadColumn>
                    <C.tableHeadColumn width={150}>Valor</C.tableHeadColumn>
                </tr>
            </thead>
            <tbody>
              { list.map((item, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td>{ item.title }</td>
                  <td></td>
                </tr>
              )) } 
            </tbody>
        </C.table>    
  )
}
