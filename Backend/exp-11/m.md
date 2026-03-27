# 🚀 Deploying on Render

### 1. Deploy Order Service First
- Go to **[render.com](https://render.com)** → **New** → **Web Service**
- Connect your GitHub repo: `indie-priyanshu12/FSD-2`
- Fill in the settings:

| Field | Value |
|---|---|
| **Name** | `order-service` |
| **Root Directory** | `Backend/exp-11/micro-services-lab/order_service` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn order_app:app` |

- Click **Deploy** → Wait for it to go live.
- **Copy the URL** (e.g., `https://order-service-xxxx.onrender.com`).

---

### 2. Deploy Customer Service
- **New** → **Web Service** again.
- Fill in settings:

| Field | Value |
|---|---|
| **Name** | `customer-service` |
| **Root Directory** | `Backend/exp-11/micro-services-lab/customer-service` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn customer_app:app` |

- Under **Environment Variables**, add:

| Key | Value |
|---|---|
| `ORDER_SERVICE_URL` | `https://order-service-xxxx.onrender.com` (paste your Order Service URL) |

- Click **Deploy**.

---

### 🧪 Test Live URLs
Once both are live, test them using the Render URLs:

```http
GET https://customer-service-xxxx.onrender.com/customers/101/orders
GET https://order-service-xxxx.onrender.com/orders/user/101
PUT https://order-service-xxxx.onrender.com/orders/1/status
```

> [!NOTE]
> Free tier on Render spins down after 15 mins of inactivity — the first request may take ~30 seconds to wake up.