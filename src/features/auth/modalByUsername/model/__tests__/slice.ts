import * as SERVICES from '../services'
import { loginActions, loginReducer } from '../slice'
import { LoginSchema } from '../types'

describe('auth.modalByusername.model.slice', () => {
  describe('actions', () => {
    describe('setField', () => {
      it('can set username', () => {
        const state: Partial<LoginSchema> = {
          fields: {
            username: '',
            password: ''
          }
        }

        expect(loginReducer(state as LoginSchema, loginActions.setField({ field: 'username', value: 'test User' }))).toEqual({
          fields: expect.objectContaining({
            username: 'test User'
          })
        })
      })

      it('can set password', () => {
        const state: Partial<LoginSchema> = {
          fields: {
            username: '',
            password: ''
          }
        }

        expect(loginReducer(state as LoginSchema, loginActions.setField({ field: 'password', value: 'test password' }))).toEqual({
          fields: expect.objectContaining({
            password: 'test password'
          })
        })
      })
    })

    describe('async login', () => {
      describe('in state pending', () => {
        it('is setting status = "request"', () => {
          const state: Partial<LoginSchema> = {
            status: 'received'
          }

          expect(loginReducer(state as LoginSchema, SERVICES.login.pending)).toEqual({
            status: 'request'
          })
        })
      })

      describe('in state fullfilled', () => {
        it('is setting status = "received"', () => {
          const state: Partial<LoginSchema> = {
            status: 'request'
          }

          expect(loginReducer(state as LoginSchema, SERVICES.login.fulfilled)).toEqual({
            status: 'received'
          })
        })
      })

      describe('in state fullfilled', () => {
        it('is setting status = "error"', () => {
          const state: Partial<LoginSchema> = {
            status: 'request'
          }

          expect(loginReducer(state as LoginSchema, SERVICES.login.rejected)).toEqual({
            status: 'error'
          })
        })

        // it('is setting "error"', () => {
        //   const loginSpy = jest.spyOn(SERVICES, 'login').mockRejectedValue('ERROR' as never)

        //   const state: Partial<LoginSchema> = {
        //     error: ''
        //   }

        //   expect(loginReducer(state as LoginSchema, loginSpy())).toEqual({
        //     status: 'error'
        //   })
        // })
      })
    })
  })
})
