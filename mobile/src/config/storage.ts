import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key: string) => {
    let item: any = null;
    try {
        item = await AsyncStorage.getItem(key) || 'none';
    } catch (error: any) {
        console.log(error?.message);
    }
    return item;
}

export const setItem = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error: any) {
        console.log(error.message);
    }
}

export const deleteCityName = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error: any) {
        console.log(error.message);
    }
}