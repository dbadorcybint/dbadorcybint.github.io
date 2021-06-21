(function () {
    window.onload = function () {
        $('#user_id').val(makeRandomUserId())
        $('#lis_person_name_full').val(makeRandomFullName())
        $('#lis_person_sourcedid').val(makeRandomSourcedId($('#lis_person_name_given').val(), $('#lis_person_name_family').val()))
        updateLtiLaunchForm()
    };

    this.updateLtiLaunchForm = function () {
        var launchUrl = $('#launchUrl').val();
        var encodedSecret = encodeURIComponent($('#secret').val()) + '&';
        var $ltiLaunchForm = $('#ltiLaunchForm');

        $ltiLaunchForm.attr('action', launchUrl);
        $('#oauth_consumer_key').val($('#key').val());
        $('#oauth_timestamp').val(Math.floor(new Date().getTime() / 1000));
        $('#oauth_nonce').val(uniqid('', true));

        var fields = [];
        $('input[type="text"]', $ltiLaunchForm).not('[name="oauth_signature"]').each(function () {
            var input = $(this);
            fields.push(input.attr('name') + '=' + rawurlencode(input.val()));
        });
        var message = 'POST&' + encodeURIComponent(launchUrl) + '&' +
            rawurlencode(fields.sort().join('&'));

        var oauthSignature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, encodedSecret));
        $('#oauth_signature').val(oauthSignature);
    };

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

const part1 = document.getElementById('part-1')
const part2 = document.getElementById('part-2')
const part3 = document.getElementById('part-3')
const part4 = document.getElementById('part-4')
const part5 = document.getElementById('part-5')

const next1 = document.getElementById('next-1')
const next2 = document.getElementById('next-2')
const next3 = document.getElementById('next-3')
const next4 = document.getElementById('next-4')

const launch = document.getElementById('launch_lti')

const back1 = document.getElementById('back-1')
const back2 = document.getElementById('back-2')
const back3 = document.getElementById('back-3')
const back4 = document.getElementById('back-4')

const progressZero = document.getElementById('progressZero')
const progressTwentyFive = document.getElementById('progressTwentyFive')
const progressFifty = document.getElementById('progressFifty')
const progressSeventyFive = document.getElementById('progressSeventyFive')
const progressOneHundred = document.getElementById('progressOneHundred')

next1.addEventListener('click', function () {
    part1.classList.add('hide-par')
    part2.classList.remove('hide-par')
    progressZero.classList.add('hide-progress')
    progressTwentyFive.classList.remove('hide-progress')
})

next2.addEventListener('click', function () {
    part2.classList.add('hide-par')
    part3.classList.remove('hide-par')
    progressTwentyFive.classList.add('hide-progress')
    progressFifty.classList.remove('hide-progress')
})

next3.addEventListener('click', function () {
    part3.classList.add('hide-par')
    part4.classList.remove('hide-par')
    progressFifty.classList.add('hide-progress')
    progressSeventyFive.classList.remove('hide-progress')
})

next4.addEventListener('click', function () {
    part4.classList.add('hide-par')
    part5.classList.remove('hide-par')
    progressSeventyFive.classList.add('hide-progress')
    progressOneHundred.classList.remove('hide-progress')
})

back1.addEventListener('click', function () {
    part2.classList.add('hide-par')
    part1.classList.remove('hide-par')
    progressTwentyFive.classList.add('hide-progress')
    progressZero.classList.remove('hide-progress')
})

back2.addEventListener('click', function () {
    part3.classList.add('hide-par')
    part2.classList.remove('hide-par')
    progressFifty.classList.add('hide-progress')
    progressTwentyFive.classList.remove('hide-progress')
})

back3.addEventListener('click', function () {
    part4.classList.add('hide-par')
    part3.classList.remove('hide-par')
    progressSeventyFive.classList.add('hide-progress')
    progressFifty.classList.remove('hide-progress')
})

back4.addEventListener('click', function () {
    part5.classList.add('hide-par')
    part4.classList.remove('hide-par')
    progressOneHundred.classList.add('hide-progress')
    progressSeventyFive.classList.remove('hide-progress')
})
