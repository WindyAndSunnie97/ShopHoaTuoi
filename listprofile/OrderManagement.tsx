import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Định nghĩa interface cho cấu trúc của một đơn hàng
interface Order {
  id: number;
  customerName: string;
  product: string;
  quantity: number;
  total: number;
}

const OrderManagementScreen: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Giả lập dữ liệu đơn hàng
  useEffect(() => {
    const fakeOrders: Order[] = [
      { id: 1, customerName: 'Nguyễn Văn A', product: 'Sản phẩm A', quantity: 2, total: 200000 },
      { id: 2, customerName: 'Trần Thị B', product: 'Sản phẩm B', quantity: 1, total: 50000 },
      { id: 3, customerName: 'Lê Văn C', product: 'Sản phẩm C', quantity: 3, total: 300000 }
    ];
    setOrders(fakeOrders);
  }, []);

  // Render một dòng cho mỗi đơn hàng
  const renderOrderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderItem}>
      <Text>Mã đơn hàng: {item.id}</Text>
      <Text>Tên khách hàng: {item.customerName}</Text>
      <Text>Sản phẩm: {item.product}</Text>
      <Text>Số lượng: {item.quantity}</Text>
      <Text>Tổng tiền: {item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quản lý đơn hàng</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default OrderManagementScreen;
