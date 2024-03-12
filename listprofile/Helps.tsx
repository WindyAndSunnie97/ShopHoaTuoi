import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Helps = ({navigation}:any) => {
    const [services, setServices] = useState([
        { id: '1', name: 'Hỗ trợ kỹ thuật', description: 'Hỗ trợ kỹ thuật 24/7' },
        { id: '2', name: 'Hướng dẫn sử dụng', description: 'Hướng dẫn sử dụng sản phẩm' },
        { id: '3', name: 'Yêu cầu bảo hành', description: 'Yêu cầu bảo hành sản phẩm' }
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newServiceName, setNewServiceName] = useState('');
    const [newServiceDescription, setNewServiceDescription] = useState('');

    const addService = () => {
        if (newServiceName && newServiceDescription) {
            const newService = {
                id: (services.length + 1).toString(),
                name: newServiceName,
                description: newServiceDescription
            };
            setServices([...services, newService]);
            setModalVisible(false);
            setNewServiceName('');
            setNewServiceDescription('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.cont1}>
    <Icon name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Helps</Text>
      </View>
            <FlatList
                data={services}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.serviceItem}>
                        <Text style={styles.serviceName}>{item.name}</Text>
                        <Text style={styles.serviceDescription}>{item.description}</Text>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.addButtonText}>Thêm dịch vụ mới</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên dịch vụ"
                        value={newServiceName}
                        onChangeText={text => setNewServiceName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mô tả dịch vụ"
                        value={newServiceDescription}
                        onChangeText={text => setNewServiceDescription(text)}
                    />
                    <Button title="Thêm" onPress={addService} />
                    <Button title="Hủy" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    cont1:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginBottom:15
          },
    icones: {
        fontSize: 25,
    paddingRight:10,
    color:'green'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
    serviceItem: {
        backgroundColor: '#eee',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    serviceName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    serviceDescription: {
        fontSize: 16,
        marginTop: 10
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%'
    }
});

export default Helps;
