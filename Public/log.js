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

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful!');
            console.log(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (err) {
        alert('An error occurred. Please try again.');
        console.error(err);
    }
});

document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const formData = {
        username: document.querySelector('#registerForm input[placeholder="Choose a username"]').value,
        email: document.querySelector('#registerForm input[placeholder="Enter your email"]').value,
        password: document.querySelector('#registerForm input[placeholder="Create a password"]').value,
    };

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
    } catch (err) {
        alert("Error during registration");
        console.error(err);
    }
});