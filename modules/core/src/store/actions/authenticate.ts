/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
    CommonAuthenticateActionTypes,
    ResetAuthenticationActionInterface,
    SetInitializedActionInterface,
    SetSignInActionInterface,
    SetSignOutActionInterface
} from "./types";
import { AuthenticatedUserInterface } from "../../models";

/**
 * Redux action to set sign in.
 *
 * @return {SetSignInActionInterface} An action of type `SET_SIGN_IN`
 */
export const setSignIn = (userInfo: AuthenticatedUserInterface): SetSignInActionInterface => ({
    payload: userInfo,
    type: CommonAuthenticateActionTypes.SET_SIGN_IN
});

/**
 * Redux action to set sign out.
 *
 * @return {SetSignOutActionInterface} An action of type `SET_SIGN_OUT`
 */
export const setSignOut = (): SetSignOutActionInterface => ({
    type: CommonAuthenticateActionTypes.SET_SIGN_OUT
});

/**
 * Redux action to set initialized.
 *
 * @return {SetSignOutActionInterface} An action of type `SET_INITIALIZED`.
 */
export const setInitialized = (flag: boolean): SetInitializedActionInterface => ({
    payload: flag,
    type: CommonAuthenticateActionTypes.SET_INITIALIZED
});

/**
 * Redux action to reset authentication.
 *
 * @return {ResetAuthenticationActionInterface} An action of type `RESET_AUTHENTICATION`
 */
export const resetAuthentication = (): ResetAuthenticationActionInterface => ({
    type: CommonAuthenticateActionTypes.RESET_AUTHENTICATION
});
