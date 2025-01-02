function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    if (formType === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginBtn.classList.add('border-yellow-400', 'text-yellow-400');
        loginBtn.classList.remove('border-transparent', 'text-gray-400');
        registerBtn.classList.remove('border-yellow-400', 'text-yellow-400');
        registerBtn.classList.add('border-transparent', 'text-gray-400');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerBtn.classList.add('border-yellow-400', 'text-yellow-400');
        registerBtn.classList.remove('border-transparent', 'text-gray-400');
        loginBtn.classList.remove('border-yellow-400', 'text-yellow-400');
        loginBtn.classList.add('border-transparent', 'text-gray-400');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration functionality would be implemented here!');
});