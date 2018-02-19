require 'rails_helper'

feature 'navbar' do
  scenario 'the index page should feature a nav bar' do

    visit '/'

    expect(page).to have_content('CHARLOTTE SMITH')
  end

  scenario 'I want to see a list of links' do
    visit '/'

    expect(page).to have_content('PROJECTS')
    expect(page).to have_content('BLOG')
    expect(page).to have_content('ABOUT')
    expect(page).to have_content('CONTACT')
  end
end
