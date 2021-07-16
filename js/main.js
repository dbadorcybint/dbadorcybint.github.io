(function () {
    window.onload = function () {
        $('#user_id').val(makeRandomUserId())
        $('#lis_person_name_full').val(makeRandomFullName())
        $('#lis_person_sourcedid').val(makeRandomSourcedId($('#lis_person_name_given').val(), $('#lis_person_name_family').val()))
        updateLtiLaunchForm()
    };

    var encodedSecret;

    this.updateLtiLaunchForm = function () {
        var launchUrl = $('#launchUrl').val();
        var $ltiLaunchForm = $('#ltiLaunchForm');

        $ltiLaunchForm.attr('action', launchUrl);
        $('#oauth_timestamp').val(Math.floor(new Date().getTime() / 1000));
        $('#oauth_nonce').val(uniqid('', true));

        var fields = [];
        $('input', $ltiLaunchForm).not('[name="oauth_signature"]').not('[name="username"]').not('[name="password"]').not('[name="flexRadioDefault"]').each(function () {
            var input = $(this);
            fields.push(input.attr('name') + '=' + rawurlencode(input.val()));
        });

        var message = 'POST&' + encodeURIComponent(launchUrl) + '&' +
            rawurlencode(fields.sort().join('&'));

        var oauthSignature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, encodedSecret));
        $('#oauth_signature').val(oauthSignature);
    };

    $('#ltiLaunchForm').submit(function() {
        $('input[name="username"]').prop('disabled', true);
        $('input[name="password"]').prop('disabled', true);
        this.updateLtiLaunchForm;
    });

    this.makeRandomFullName = function () {
        var firstName = ""
        var lastName = ""
        var capitalLetterFirstName = ""
        var capitalLetterLastName = ""
        var possibleCapitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var possible = "abcdefghijklmnopqrstuvwxyz"
        
        for (var i = 0; i < 1; i++) {
            capitalLetterFirstName += possibleCapitalLetter.charAt(Math.floor(Math.random() * possibleCapitalLetter.length))
        }

        for (var i = 0; i < 1; i++) {
            capitalLetterLastName += possibleCapitalLetter.charAt(Math.floor(Math.random() * possibleCapitalLetter.length))
        }

        for (var i = 0; i < 4; i++) {
            firstName += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        for (var i = 0; i < 4; i++) {
            lastName += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        $('#lis_person_name_family').val(capitalLetterLastName+lastName)
        $('#lis_person_name_given').val(capitalLetterFirstName+firstName)
        $('#lis_person_contact_email_primary').val(((capitalLetterFirstName+firstName).toLowerCase())+"."+((capitalLetterLastName+lastName).toLowerCase())+"@gmail1000000.com")

        return capitalLetterFirstName + firstName + " " + capitalLetterLastName + lastName
    }

    this.makeRandomUserId = function () {
        var userIdAddition = ""
        var possible = "0123456789"

        for (var i = 0; i < 4; i++) {
            userIdAddition += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        return $('#user_id').val() + userIdAddition
    }

    this.makeRandomSourcedId = function (firstName, lastName) {
        return $('#lis_person_sourcedid').val() + "_" + firstName + "_" + lastName
    }

    this.rawurlencode = function (str) {
        str = (str + '').toString();
        return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
            replace(/\)/g, '%29').replace(/\*/g, '%2A');
    };

    this.uniqid = function (prefix, moreEntropy) {
        prefix = prefix || '';
        moreEntropy = moreEntropy || false;
        var result;

        this.formatSeed = function (seed, width) {
            seed = parseInt(seed, 10).toString(16);
            return width < seed.length
                ? seed.slice(seed.length - width)
                : ((width > seed.length) ? new Array(1 + (width - seed.length)).join('0') + seed : seed);
        };

        result = prefix + this.formatSeed(parseInt(new Date().getTime() / 1000, 10), 8) + this.formatSeed(Math.floor(Math.random() * 0x75bcd15) + 1, 5);

        if (moreEntropy) result += (Math.random() * 10).toFixed(8).toString();

        return result;
    };
})();

$('#flexRadioDefault1').click(function() {
    if (document.getElementById('flexRadioDefault1').classList.contains('selected-check')) {
        $('#flexRadioDefault1').removeClass('selected-check')
    } else {
        $('#flexRadioDefault1').addClass('selected-check')
    }
    if (!document.getElementById('flexRadioDefault1').classList.contains('selected-check')) {
        $('#flexRadioDefault1').prop('checked', false)
    } else {
        $('#flexRadioDefault1').prop('checked', true)
    }
})

$('#key').change(function() {
    $('#oauth_consumer_key').val($('#key').val());
})

$('#secret').change(function() {
    encodedSecret = encodeURIComponent($('#secret').val()) + '&';
})

// const loginColumn = document.getElementById('loginColumn')
// const leftColumn = document.getElementById('leftColumn')

// const part1 = document.getElementById('part-1')
// const part2 = document.getElementById('part-2')
// const part3 = document.getElementById('part-3')
// const part4 = document.getElementById('part-4')
// const part5 = document.getElementById('part-5')

// const next1 = document.getElementById('next-1')
// const next2 = document.getElementById('next-2')
// const next3 = document.getElementById('next-3')
// const next4 = document.getElementById('next-4')

// const launch = document.getElementById('launch_lti')

// const back1 = document.getElementById('back-1')
// const back2 = document.getElementById('back-2')
// const back3 = document.getElementById('back-3')
// const back4 = document.getElementById('back-4')

// const progressTwentyFive = document.getElementById('progressTwentyFive')
// const progressFifty = document.getElementById('progressFifty')
// const progressSeventyFive = document.getElementById('progressSeventyFive')
// const progressOneHundred = document.getElementById('progressOneHundred')

// const timeStatus = document.getElementById('timeStatus')

// const progressSection = document.getElementById('progressSection')

// const twentyFiveNum = document.getElementById('twentyFiveNum')
// const fiftyNum = document.getElementById('fiftyNum')
// const seventyFiveNum = document.getElementById('seventyFiveNum')
// const oneHundredNum = document.getElementById('oneHundredNum')

// const firstCourse = document.getElementById('firstCourse')
// const secondCourse = document.getElementById('secondCourse')
// const thirdCourse = document.getElementById('thirdCourse')
// const fourthCourse = document.getElementById('fourthCourse')
// const fifthCourse = document.getElementById('fifthCourse')

// if (next1) {
//     next1.addEventListener('click', function () {
//         part1.classList.add('hide-par')
//         firstCourse.classList.add('hide-progress')
//         secondCourse.classList.remove('hide-progress')
//         part1.classList.remove('d-flex')
//         part2.classList.add('d-flex')
//         part2.classList.add('flex-column')
//         part2.classList.remove('hide-par')
//         progressTwentyFive.classList.remove('hide-progress')
//         timeStatus.classList.add('hide-progress')
//         progressSection.classList.remove('invisible-progress')
//     })    
// }

// if (next2) {
//     next2.addEventListener('click', function () {
//         part2.classList.add('hide-par')
//         part3.classList.remove('hide-par')
//         part2.classList.remove('d-flex')
//         part2.classList.remove('flex-column')
//         secondCourse.classList.add('hide-progress')
//         thirdCourse.classList.remove('hide-progress')
//         progressTwentyFive.classList.add('hide-progress')
//         progressFifty.classList.remove('hide-progress')
//         twentyFiveNum.classList.add('hide-progress')
//         fiftyNum.classList.remove('hide-progress')
//     })
// }

// if (next3) {
//     next3.addEventListener('click', function () {
//         part3.classList.add('hide-par')
//         part4.classList.remove('hide-par')
//         part3.classList.remove('d-flex')
//         part3.classList.remove('flex-column')
//         thirdCourse.classList.add('hide-progress')
//         fourthCourse.classList.remove('hide-progress')
//         progressFifty.classList.add('hide-progress')
//         progressSeventyFive.classList.remove('hide-progress')
//         fiftyNum.classList.add('hide-progress')
//         seventyFiveNum.classList.remove('hide-progress')
//     })
// }

// if (next4) {
//     next4.addEventListener('click', function () {
//         part4.classList.add('hide-par')
//         part5.classList.remove('hide-par')
//         if (!part5.classList.contains('d-flex')) {
//             part5.classList.add('d-flex')
//         }
//         if (!part5.classList.contains('flex-column')) {
//             part5.classList.add('flex-column')
//         }
//         part4.classList.remove('flex-column')
//         part4.classList.remove('d-flex')
//         fourthCourse.classList.add('hide-progress')
//         fifthCourse.classList.remove('hide-progress')
//         progressSeventyFive.classList.add('hide-progress')
//         progressOneHundred.classList.remove('hide-progress')
//         seventyFiveNum.classList.add('hide-progress')
//         oneHundredNum.classList.remove('hide-progress')
//     })
// }

// if (back1) {
//     back1.addEventListener('click', function () {
//         part2.classList.add('hide-par')
//         part2.classList.remove('d-flex')
//         part2.classList.remove('flex-column')
//         part1.classList.remove('hide-par')
//         part1.classList.add('d-flex')
//         part1.classList.add('flex-column')
//         secondCourse.classList.add('hide-progress')
//         firstCourse.classList.remove('hide-progress')
//         progressTwentyFive.classList.add('hide-progress')
//         timeStatus.classList.remove('hide-progress')
//         progressSection.classList.add('invisible-progress')
//     })
// }

// if (back2) {
//     back2.addEventListener('click', function () {
//         part3.classList.add('hide-par')
//         part2.classList.remove('hide-par')
//         part2.classList.add('d-flex')
//         part2.classList.add('flex-column')
//         thirdCourse.classList.add('hide-progress')
//         secondCourse.classList.remove('hide-progress')
//         progressFifty.classList.add('hide-progress')
//         progressTwentyFive.classList.remove('hide-progress')
//         fiftyNum.classList.add('hide-progress')
//         twentyFiveNum.classList.remove('hide-progress')
//     })
// }

// if (back3) {
//     back3.addEventListener('click', function () {
//         part4.classList.add('hide-par')
//         part3.classList.remove('hide-par')
//         part3.classList.add('d-flex')
//         part3.classList.add('flex-column')
//         fourthCourse.classList.add('hide-progress')
//         thirdCourse.classList.remove('hide-progress')
//         progressSeventyFive.classList.add('hide-progress')
//         progressFifty.classList.remove('hide-progress')
//         seventyFiveNum.classList.add('hide-progress')
//         fiftyNum.classList.remove('hide-progress')
//     })
// }

// if (back4) {
//     back4.addEventListener('click', function () {
//         part5.classList.add('hide-par')
//         part5.classList.remove('d-flex')
//         part5.classList.remove('flex-column')
//         part4.classList.remove('hide-par')
//         part4.classList.add('d-flex')
//         part4.classList.add('flex-column')
//         fifthCourse.classList.add('hide-progress')
//         fourthCourse.classList.remove('hide-progress')
//         progressOneHundred.classList.add('hide-progress')
//         progressSeventyFive.classList.remove('hide-progress')
//         oneHundredNum.classList.add('hide-progress')
//         seventyFiveNum.classList.remove('hide-progress')
//     })
// }
