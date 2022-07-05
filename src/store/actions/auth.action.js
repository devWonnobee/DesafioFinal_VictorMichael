import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/database/firebase";

import { authTypes } from "../types/auth.types";

const {  SIGN_UP, SIGN_IN } = authTypes;

export const signup = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });
            const data = await response.json();
            console.log('data Firebase', data);
            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const singin = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        methon: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        }),
      });
      const dataw = await response.json();
      console.log('data Firebase', data);
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      })
    } catch(error) {
      console.log(error);
    }
  }
}