import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://black-coast-0dc723b10.4.azurestaticapps.net/`;
    
test(`New Test`, async t => {
    
});

test('New Test 1', async t => {
    await t
        .typeText('#headlessui-combobox-input-2', 'miss')    
        .pressKey('tab')
        .typeText('#7e51d5a7-3e73-4f66-b6a4-31293ea0bf3b', 'Stephanie')
        .pressKey('tab')
        .typeText('#d71bb583-590d-489f-8159-8c4600a548ca', 'Mandy')
        .pressKey('tab')
        .typeText('#060b1626-63fc-4586-b442-5bf565b4f868', 'Wilkinbloom')
        .pressKey('tab')
        .typeText('#3d93d989-eabb-4ec6-bdc2-13bf5bdacc81', 'Stevie')
        .pressKey('tab')
        .pressKey('2')
        .pressKey('2')
        .pressKey('0')
        .pressKey('6')
        .pressKey('1')
        .pressKey('9')
        .pressKey('6')
        .pressKey('0')
        .pressKey('tab')
        .pressKey('f')
        .pressKey('tab')
        .typeText('#a-62297c99-c160-49a1-b4ed-e6afc936e49b', '3 osbor')
        .typeText('#a-62297c99-c160-49a1-b4ed-e6afc936e49b', '3 osbors')
        .pressKey('s')
        .typeText('#818ad329-c34c-4111-8a9b-f102e746de52', 'teve@take2,.')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText('#818ad329-c34c-4111-8a9b-f102e746de52', '.team')
        .pressKey('tab')
        .pressKey('1+0')
        .pressKey('0+2')
        .pressKey('2+0')
        .pressKey('2')
        .pressKey('4')
        .pressKey('tab')
        .typeText('#320e1e9f-445c-407c-bfc5-1a5a625c136b', '3')
        .pressKey('tab')
        .typeText('#98e173bd-ae8c-4a1e-a44e-6f0a2ecb0c46', '1257l')
        .pressKey('tab')
        .pressKey('space')
        .pressKey('tab')
        .typeText('#9135a1cb-3004-46d2-81e3-61dd03cdde0c', 'NA6178918A')
        .pressKey('tab')
        .pressKey('x')
        .pressKey('tab')
        .pressKey('space')
        .pressKey('a')
        .pressKey('tab')
        .pressKey('4')
        .pressKey('tab')
        .pressKey('space')
        .pressKey('tab')
        .pressKey('enter')
});

test('New Test 2', async t => {
    await t
        .click('#327ce14f-e9e2-454b-a79f-5f416284cc9d')    
        .click('#36d103ed-54c2-472a-ac59-1c967d5d42f5')
        .click('#1750be4e-dc2c-4220-8a79-3c7a7e6b8f93')
});