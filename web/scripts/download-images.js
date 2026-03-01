/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const images = {
    'services-branding.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw1o5iSPnBwSo-80N0TZHaYR__11AW3F3JJ72Kem4BpGJzVotAAaX3hnjin6Ckc8SnqrHR-6y5Ycu7sjnf_hQxSTTBENq7S1jgVXGXGChDNFpGmCJCTgy6QPrNUPnpHq1ggrjaM8MflbWNhgyTBMcCgBaHw0St7x_msy0drnCqDJW2OFVxVP6L4eGWqVMUn7YOF22uHCnHqeZnCW3_Ia2UPXUE5zKwnLMWhmFncle1nd43Wy0BKIu8c2mqeRyo0hWGTMx6r_Z8767B',
    'manifesto-team.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXk0Jg7emcNWEGqyw2q7xMvrut7JSTaWEJZckNDIkq3I6KhF4pvlnNf-RePUEAvopoFAZYTM6PCikZNFqZVx1AZ4_cPuQitsaI5LDgv4dkgjwVk9Cq6jCy55jFMoUOrIgmhYWIS4f5IbHLK6x2Qfxke9JCQTWEr_7mQyQay6fY9uhs-leGza10w3X6437DzAsE8ubAzBE3asaGE1BBkqEAeOVK46ZcBf_YBfrjOk-3izKsQgdXIRBDXE398rH8RPIzDeHPE_bsBJE1',
    'abstract-octopus.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeJLpdgkUINBED3PqFDeKdRRphFdDwzoQv3s-epDT36WCwlyTIX69E75TTWO5o6jVJVUYr7nH_GOh3aSg_3tgOojIJ6M6xoNc4qHw6Exul_OvN9hZltBy-sa5oxe0pmGkSG6KgIQsFvx-SJILWXuuxXTZzWwhtaNTm4ICMUMoZ5BjSSaJZm6boibz3FDUfXVMX3lXngSErbWELLaFSEsjjnWC1Y-PnCw96a3_U-KWHwkAKGQK3hqtzQq_oa0-9ffPSBhLjU3btipt4',
    'fintech-data.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNeenm0VFSOfXoWwscwjuBMgXZ_fi8d4NSN3c37zS0jCGbsmPLhI59tScJG6_EML4_sR05_pPb-4Ms3vJJTWHLXgMXlSaUR26eZS43DgVbbiQRJdeezz-KZsOL4Cn0DuBfmrLsmetjGDFnY4tg0tUl_GTtuXwyGQ-iSEoNUeT38LoR6lWorwfMKopAcaSvwLbtZmQ_MpQH17hLaNXZuJDV1WyC13UGUUAJIyn7OLHQrG8GVSmuYrKcKURcpuSTAPypTN4IV_UBWTvz',
    'avatar-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbjqMxuryGEfAL_EBSXw763BeGhb1K6xtDxpbaHwGV_YkXzCOp9tcko8DA_1AUqCMhQrl28jo5kWGcjHY5SL1eqq9pkCLEkvCt6u0CZXBnsSXZF4gzEOYe9Nm997yVhtGM8b-iRbfWRHVSYvJD1LGT2kI2dEsRSeTn11Rc6AMlJgJiBhEmNmdhxSekyqSHNhErBqy79c1nHkvtxalMelIRUP5ylBo08CnrhuHoWrszJrEmS87TylPp2AGN-bQrJFmWuxim3G9kfY24',
    'avatar-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD0hiYGrolwfPG3im3cw_Ikwm6GRwjNISLSGHGwFRZ6nhMnPjYMzDW5GEBZqPlrHM3j-Jj-nJUMPxDDBlcSLGMnNcut3tdnKkmkJXGQw9A-bk3aBaYopQ92ggreKLKD642jSJoTpEuJ-yKRNyaiLum-byMcjOZurisVkeEY6nZDTzIOwxr8ptYwQmhOQIOf11iKmx59-WlwyR3FibSstt1xt5AlZFfa1Wt5HVNhZ_C5Fhq8zS3cUBf-2MRfLmZVnLbP-JqbbuSBk8D',
    'avatar-3.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXeZ_aYzHCMuR1dc0OnKL5G2Pd5ZcbR69XIKEoVXcSIecq1twgKjqNB9vVtMmRw7bpfmNMLQ0dJQeKsaARdadxeI3SCrWd4tZcNqKA3WbFW91FwiuwLhAu8ml4P3wzBgphlfB0m1zqORKtF-D7WmDP_Yrhukjd41Msu-XtNLNIZEEACt4lJsFQN9gZfL1al_kZ3DBbFsdZJfgrx90A-JW_OnThoU0wJ9e1ci0k8QXSMdSpmmOH6llJuBM0g-XylnHxPN5LWsAncCJP'
};

Object.entries(images).forEach(([name, url]) => {
    const file = fs.createWriteStream(path.join(dir, name));
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${name}`);
        });
    }).on('error', (err) => {
        fs.unlink(path.join(dir, name));
        console.error(`Error downloading ${name}: ${err.message}`);
    });
});
