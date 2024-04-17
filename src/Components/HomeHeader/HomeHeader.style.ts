import { StyleSheet } from "react-native";
import { defaultStyle } from "../../styles/variable";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
	},

    avatar_Wrapper:{
      flexDirection:"row",
      gap:10,
      alignItems:"center"
    },

    icon_Wrapper:{
        borderColor:defaultStyle.baseBorderColor,
        borderRadius: 50,
        padding: 6,
        borderWidth:1,
        position:'relative'
    },

    icon_notifier:{
       position: 'absolute',
       top:-3.5,
       right:-0.5
    }
});

export default styles;
