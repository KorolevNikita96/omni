import { Router } from "express"
import { outsourcing } from "../controllers/outsourcing.controller.js"
import { payment } from "../controllers/payment.controller.js"
import { register, registerTest } from "../controllers/register.controller.js"
import { services } from "../controllers/services.controller.js"
import { testUsers } from "../controllers/testUser.controller.js"

const router = Router()

router.post("/register-test*", registerTest)
router.post("/register*", register)
router.post("/payment*", payment)
router.post("/services*", services)
router.post("/outsourcing*", outsourcing)
router.get("/test-users*", testUsers)

export default router
