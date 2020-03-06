import { Selector } from 'testcafe';
import Colors from 'colors';

const inputBox = Selector('input.gLFyf.gsfi');
const searchButton = Selector('input.gNO89b')
const celebrityName = Selector('div.kno-ecr-pt.PZPZlf.gsmt.i8lZMc.sKbx2c')

fixture `Getting Started`
    .page `http://google.com`;

    test('My First test', async t => {
        await t
        .wait(2000)
        .typeText(inputBox, 'Priyanka')
        .wait(1000)
        .click(searchButton)
        .wait(2000)
        .expect(celebrityName.innerText).eql("Priyanka Chopra")
        console.log(celebrityName.innerText)
        const test3 = await celebrityName.innerText
        console.log(test3)
        console.log(test3.red)
    })

    test
    .page  `https://twitter.com`
    ('Second_test_with_different_url', async t => {
        await t
        .wait(2000)
    })
