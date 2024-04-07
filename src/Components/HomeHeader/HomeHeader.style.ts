import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
		padding: 16,
	},

    avatar_Wrapper:{
      flexDirection:"row",
      gap:10,
      alignItems:"center"
    },

    icon_Wrapper:{
        borderColor:'#f2f2f7',
        borderRadius: 50,
        padding: 1,
        borderWidth:1,
        position:'relative'
    },

    icon_notifier:{
       position: 'absolute',
       top:-4,
       right:-4
    }
});

export default styles;
