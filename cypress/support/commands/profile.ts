const updateProfile = () => {
  cy.getByTestId<HTMLButtonElement>('ProfileCard__editButton').click()
  cy.getByTestId<HTMLInputElement>('ProfileCard__firstName_Input').clear().type('newName')
  cy.getByTestId<HTMLInputElement>('ProfileCard__lastName_Input').clear().type('newLastName')
  cy.getByTestId<HTMLButtonElement>('ProfileCard__saveButton').click()
}

const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: 'http://localhost:2000/profiles/' + profileId,
    headers: {
      Authorization: 'qwe'
    },
    body: {
      id: '1',
      first: 'jgh',
      lastname: 'asf',
      age: 465,
      currency: 'RUB',
      country: 'Belarus',
      city: 'Moscow',
      username: 'admin213',
      avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj'
    }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>
      resetProfile(profileId: string): Promise<any>
    }
  }
}

export {
  updateProfile,
  resetProfile
}
