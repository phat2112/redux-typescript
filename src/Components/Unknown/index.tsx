import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd'
import {ListActions} from '../../Stores/Unknown/Actions'
import {ListSelectors} from '../../Stores/Unknown/Selectors'
import {useDispatch, useSelector} from 'react-redux'

type ListUnknown = {
    page: number,
    perPage: number,
    total: number,
    totalPage: number,
    data: Array<DataUnknown>
}
type DataUnknown = {
    id: number,
    name: string,
    year: number,
    pantoneValue: string,
}
type Columns = {
    title: string,
    dataIndex: string,
    key: string,
}

const UknownComponent = () => {
    const dispatch = useDispatch()
    const ListUnknown: ListUnknown = useSelector(state => ListSelectors.getListUnknown(state))
    const dataSource: DataUnknown[] = [
        {
          id: 1,
          name: 'Mike',
          year: 2010,
          pantoneValue: '10 Downing Street',
        },
        {
          id: 2,
          name: 'John',
          year: 2020,
          pantoneValue: '10 Downing Street',
        },
      ];
      
      const columns: Columns[] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
        },
        {
          title: 'Pantone Value',
          dataIndex: 'pantoneValue',
          key: 'pantoneValue',
        },
      ];
    useEffect(() => {
        dispatch(ListActions.getListUnknown())
    }, [])
    useEffect(() => {
        console.log('ListUnknown', ListUnknown)
    }, [ListUnknown])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>year</td>
                        <td>pantone value</td>
                    </tr>
                </thead>
                <tbody>
                    {ListUnknown.data ? ListUnknown.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                            <td>{item.pantoneValue}</td>
                        </tr>
                    )) : ''}
                </tbody>
            </table>
            <Table dataSource={ListUnknown.data ? ListUnknown.data : dataSource} columns={columns} />
        </div>
    );
};

UknownComponent.propTypes = {
    
};

export default UknownComponent;