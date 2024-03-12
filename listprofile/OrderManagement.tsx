import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
  _id: string;
  customerName: string;
  product: string;
  price: number;
  status: string;
}

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios.get<Order[]>('/api/Flowershop/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Quản lý đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Khách hàng</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customerName}</td>
              <td>{order.product}</td>
              <td>{order.price}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;
