// import React, { useEffect } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useSelector, useDispatch } from 'react-redux';
//  // Import action để lấy dữ liệu người dùng
// import Icon from "react-native-vector-icons/Ionicons";
// import Icones from 'react-native-vector-icons/MaterialCommunityIcons';
// import { RootState } from "../redux/RootState";

// const Account = ({ navigation }:any) => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state: RootState) => state.login); // Chỉ định kiểu RootState cho state

//   useEffect(() => {
//     // Dispatch action để lấy thông tin người dùng khi component mount
//     dispatch(userData());
//   }, [dispatch]); 

//   return (
//     <View style={styles.container}>
//       <View style={styles.cont1}>
//         <Icon name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
//         <Text style={styles.title}>Account</Text>
//       </View>

//       {userData && (
//         <View style={styles.form}>
//           <View style={styles.group}>
//             <Icones name="card-account-phone" style={styles.icon} />
//             <TouchableOpacity style={styles.touchable}>
//               <Text style={styles.text}>{userData.name}</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.group}>
//             <Icon name="settings" style={styles.icon} />
//             <TouchableOpacity style={styles.touchable}>
//               <Text style={styles.text}>{userData.email}</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.group}>
//             <Icon name="heart" style={styles.icon} />
//             <TouchableOpacity style={styles.touchable}>
//               <Text style={styles.text}>{userData.phone}</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.group}>
//             <Icones name="order-bool-ascending-variant" style={styles.icon} />
//             <TouchableOpacity style={styles.touchable}>
//               <Text style={styles.text}>{userData.accountName}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cont1: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginBottom: 15
//   },
//   container: {},
//   icones: {
//     margin: 10,
//     fontSize: 25,
//     color: '#027353'
//   },
//   title: {
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 30,
//     fontFamily: 'Lobster',
//     alignItems: 'center'
//   },
//   form: {
//     marginTop: 30,
//     paddingHorizontal: 30,
//     flexDirection: 'column-reverse',
//     justifyContent: 'space-between',
//     marginBottom: 20
//   },
//   group: {
//     marginTop: 15,
//     justifyContent: 'center',
//     marginBottom: 15,
//     borderWidth: 1,
//     backgroundColor: '#fff',
//     borderColor: 'pink',
//     borderRadius: 15,
//     paddingLeft: 5
//   },
//   touchable: {
//     padding: 15,
//     borderRadius: 20,
//     paddingLeft: 35,
//     borderCurve: 'continuous'
//   },
//   text: {
//     fontSize: 17,
//     fontWeight: '600',
//     paddingLeft: 10
//   },
//   icon: {
//     fontSize: 22,
//     position: 'absolute',
//     top: 15,
//     zIndex: 1000,
//     paddingLeft: 10,
//     textAlign: 'right'
//   }
// });

// export default Account;
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/RootState";
import Icon from "react-native-vector-icons/Ionicons";
import Icones from 'react-native-vector-icons/MaterialCommunityIcons';
import loginReducer from "../redux/login/asscess";
import { isLogin, logOut } from '.././redux/login/action';

const Account = ({ navigation, route }: any) => {
 const { userData } = route.params|| {}; // Nhận thông tin người dùng từ params

  if (!userData || !userData.email) {
    console.error("User data or email is missing:", userData);
    // Xử lý trường hợp userData không tồn tại hoặc thuộc tính 'email' không tồn tại
    return (
        <View style={styles.container}>
            {/* Hiển thị thông báo hoặc xử lý khác tùy thuộc vào trường hợp cụ thể */}
            <Text>Thông tin người dùng không khả dụng.</Text>
        </View>
    );
}
    // Hiển thị thông tin người dùng
    return (
        <View style={styles.container}>
              <View style={styles.cont1}>
                 <Icon name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
                 <Text style={styles.title}>Account</Text>
              </View>
              {userData && (
        <View style={styles.form}>
          <View style={styles.group}>
            <Icones name="card-account-phone" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.name}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <Icon name="settings" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.email}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <Icon name="phone" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.phone}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <Icones name="order-bool-ascending-variant" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.accountName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15
      },
      container: {},
      icones: {
        margin: 10,
        fontSize: 25,
        color: '#027353'
      },
      title: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Lobster',
        alignItems: 'center',
        margin:10
      },
      form: {
        marginTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        marginBottom: 20
      },
      group: {
        marginTop: 15,
        justifyContent: 'center',
        marginBottom: 15,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'pink',
        borderRadius: 15,
        paddingLeft: 5
      },
    userInfo: {
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 16,
        color: "#333333",
    },
    touchable: {
          padding: 15,
          borderRadius: 20,
          paddingLeft: 35,
          borderCurve: 'continuous'
        },
        text: {
          fontSize: 17,
          fontWeight: '600',
          paddingLeft: 10
        },
        icon: {
          fontSize: 22,
          position: 'absolute',
          top: 15,
          zIndex: 1000,
          paddingLeft: 10,
          textAlign: 'right'
        }
});

export default Account;
